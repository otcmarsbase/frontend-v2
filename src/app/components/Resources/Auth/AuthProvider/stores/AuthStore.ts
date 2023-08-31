import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { ModalController, appManager } from '@app/logic';
import { Resource } from '@schema/api-gateway';
import { AppConfig } from '@shared/config';
import { connect, getAccount, signMessage } from '@wagmi/core';
import { v4 } from 'uuid';

import { AuthSignInModal } from '../../AuthSignInModal';
import { AuthConnectorDictionary, AuthConnectorInfo, AuthConnectorType } from '../info';
import { AuthVerifyModal } from '../modals';

import { AuthLocalStore } from './AuthLocalStore';

export type AuthStatusType = 'NOT_AUTHORIZED' | 'CONNECTOR_SELECT' | 'VERIFY_WALLET' | 'AUTHORIZED';

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
  }

  signIn() {
    const resolver = ModalController.create(AuthSignInModal, {});
  }

  async signInWithConnector(connectorType: AuthConnectorType): Promise<void> {
    const resolver = ModalController.create(AuthVerifyModal, {});

    try {
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

      this.updateConnector(connectorType);

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
    } finally {
      resolver.destroy(void 0, true);
    }
  }

  clearAuth() {
    this._local.token = null;
    this._local.connectorType = null;
    this._account = null;
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
