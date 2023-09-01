import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { ModalController, appManager } from '@app/logic';
import { RuntimeError } from '@ddd/errors';
import { PortalInstanceControl } from '@packages/berish-react-portal';
import { Resource } from '@schema/api-gateway';
import { AuthNotAuthorizedError } from '@schema/errors';
import { AppConfig } from '@shared/config';
import { connect, getAccount, signMessage } from '@wagmi/core';
import { v4 } from 'uuid';

import { AuthConnectorDictionary, AuthConnectorType } from '../info';
import { AuthConnectModal, AuthConnectModalProps, AuthVerifyModal, AuthVerifyModalProps } from '../modals';

import { AuthLocalStore } from './AuthLocalStore';

export type AuthStatusType = 'NOT_AUTHORIZED' | 'CONNECT_WALLET' | 'VERIFY_WALLET' | 'AUTHORIZED';

export class AuthStore {
  static _instance: AuthStore;

  static getStore() {
    if (!this._instance) this._instance = new AuthStore();
    return this._instance;
  }

  private readonly _startPromise: Promise<void>;
  private readonly _local: AuthLocalStore;

  private _loadingHashes: string[];
  private _account: Resource.Account.Account;
  private _connectModalResolver?: PortalInstanceControl<AuthConnectModalProps, void>;
  private _verifyModalResolver?: PortalInstanceControl<AuthVerifyModalProps, void>;

  private constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this._local = new AuthLocalStore();

    this._loadingHashes = [];
    this._account = null;

    this._startPromise = this.initialize();
  }

  get token() {
    return this._local.token;
  }

  get account() {
    return this._account;
  }

  get connectorInfo() {
    return AuthConnectorDictionary.get(this._local.connectorType);
  }

  get isLoading() {
    return this._loadingHashes.length > 0;
  }

  get status(): AuthStatusType {
    if (this.isAuthorized) return 'AUTHORIZED';
    if (this._connectModalResolver && !this._connectModalResolver.isResulted) return 'CONNECT_WALLET';
    if (this._verifyModalResolver && !this._verifyModalResolver.isResulted) return 'VERIFY_WALLET';

    return 'NOT_AUTHORIZED';
  }

  get isAuthorized() {
    if (!this._local.token) return false;

    return !!this._account && !!this.connectorInfo;
  }

  async start() {
    await this._startPromise;
  }

  async updateToken(token: string): Promise<void> {
    if (!token) {
      this.clearAuth();
      return void 0;
    }

    this._local.token = token;
    await this.updateAccount();
  }

  async updateConnector(connectorType: AuthConnectorType) {
    this._local.connectorType = connectorType;
  }

  async updateAccount(account?: Resource.Account.Account): Promise<void> {
    try {
      if (account) {
        this._account = account;
        return void 0;
      }

      const needUpdateLoading = !this.token;
      const { schema } = appManager.serviceManager.backendApiService;
      account = await (needUpdateLoading
        ? this._execute(() => schema.send('account.me', {}))
        : schema.send('account.me', {}, { meta: { token: this.token } }));

      if (!account) {
        this.clearAuth();
        return void 0;
      }

      this._account = account;
    } catch (err) {
      if (AuthNotAuthorizedError.isExtends(err)) {
        this.clearAuth();
        return void 0;
      }
      throw err;
    }
  }

  async signIn() {
    await this._connectWallet();
    if (this.connectorInfo?.type) await this.signInWithConnector(this.connectorInfo.type);
  }

  async signInWithConnector(connectorType: AuthConnectorType): Promise<void> {
    this.updateConnector(connectorType);

    if (this._verifyModalResolver && !this._verifyModalResolver.isResulted) {
      // Its already exists, ok - Update initial states
      this._verifyModalResolver.updateProps({});
    } else {
      // Its new, ok - Open Modal
      this._verifyModalResolver = ModalController.create(AuthVerifyModal, {});
    }

    try {
      await this._signInWithConnector(connectorType);

      // All ok, close modal
      this._verifyModalResolver?.resolve();
    } catch (err) {
      const errorString = this._stringifyError(err);

      this._verifyModalResolver?.updateProps({
        error: errorString,
        onTryAgain: () => this.signInWithConnector(connectorType),
      });
    }

    await this._verifyModalResolver;
    this._verifyModalResolver = null;
  }

  clearAuth() {
    this._local.token = null;
    this._local.connectorType = null;
    this._account = null;
  }

  private async _connectWallet(): Promise<void> {
    this.updateConnector(null);

    if (!this._connectModalResolver || !this._connectModalResolver.isResulted) {
      this._connectModalResolver = ModalController.create(AuthConnectModal, {
        onSelect: (type) => this._onSelectConnectorType(type),
      });
    }

    await this._connectModalResolver;
  }

  private async _signInWithConnector(connectorType: AuthConnectorType): Promise<void> {
    const { schema } = appManager.serviceManager.backendApiService;

    const connectorInfo = AuthConnectorDictionary.get(connectorType);
    if (!connectorInfo) return void 0;

    const wagmiAccount = getAccount();
    const connectedAddress =
      wagmiAccount.connector?.id === connectorInfo.wagmiConnector.id
        ? wagmiAccount.address
        : await connect({ connector: connectorInfo.wagmiConnector })
            .then((result) => result.account)
            .catch<`0x${string}`>(() => null);
    if (!connectedAddress) return void 0;

    const generatedMessage = await schema.send('auth.generateMessage', {
      domain: window.location.host,
      uri: window.location.origin,
      address: connectedAddress,
    });

    const signature = await signMessage({ message: generatedMessage.message });
    await schema.send('auth.signIn', {
      message: generatedMessage.message,
      signatureHash: generatedMessage.signature_hash,
      signature,
    });
  }

  private async _onSelectConnectorType(connectorType: AuthConnectorType) {
    const connectModalResolve = () => {
      if (this._connectModalResolver) {
        this._connectModalResolver.resolve();
        this._connectModalResolver = null;
      }
    };

    const connectorInfo = AuthConnectorDictionary.get(connectorType);
    if (!connectorInfo) return connectModalResolve();

    const wagmiAccount = getAccount();
    const connectedAddress =
      wagmiAccount.connector?.id === connectorInfo.wagmiConnector.id
        ? wagmiAccount.address
        : await connect({ connector: connectorInfo.wagmiConnector })
            .then((result) => result.account)
            .catch<`0x${string}`>(() => null);
    if (!connectedAddress) return connectModalResolve();

    this.updateConnector(connectorType);
    return connectModalResolve();
  }

  private _stringifyError(err: any) {
    if (err instanceof RuntimeError) return err.message;
    if (err instanceof Error) return err.message;

    return String(err);
  }

  // Execute loading function
  private async _execute<T>(callback: () => Promise<T>): Promise<T> {
    const loadingHash = v4();
    this._loadingHashes.push(loadingHash);

    try {
      return await callback();
    } finally {
      this._loadingHashes.splice(this._loadingHashes.indexOf(loadingHash), 1);
    }
  }

  // Initialize store
  private async initialize(): Promise<void> {
    await makePersistable(this._local, {
      name: AppConfig.storage.AUTH_META_LOCAL_STORAGE_KEY,
      properties: ['token', 'connectorType'],
      storage: window.localStorage,
    });

    await this.updateToken(this._local.token);
  }
}
