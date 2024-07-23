import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { AuthConnectModal, AuthConnectModalProps, AuthConnectorsDictionary, AuthConnectorsType } from '@app/components';
import { ModalController, appManager } from '@app/logic';
import { PortalInstanceControl } from '@packages/berish-react-portal';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { AuthNotAuthorizedError } from '@schema/errors';
import { AppConfig } from '@shared/config';
import { v4 } from 'uuid';

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
  private _account: DeskGatewaySchema.Account;

  private _connectModalResolver?: PortalInstanceControl<AuthConnectModalProps, void>;

  private _selectedAuthConnector?: AuthConnectorsType;

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
    return this._selectedAuthConnector?.info;
  }

  get isLoading() {
    return this._loadingHashes.length > 0;
  }

  get status() {
    if (this.isAuthorized) return 'AUTHORIZED';
    if (this._selectedAuthConnector?.status) return this._selectedAuthConnector.status;

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

  async updateAccount(account?: DeskGatewaySchema.Account): Promise<void> {
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

  async onShowConnectModal() {
    await this._resolveConnectModal();
  }

  async signIn(authConnectorType: string) {
    this._updateAuthConnector(authConnectorType);
    if (this._selectedAuthConnector) await this._selectedAuthConnector.execute();
  }

  clearAuth() {
    this._local.token = null;
    this._local.connectorType = null;
    this._account = null;
  }

  private async _resolveConnectModal(): Promise<void> {
    if (!this._connectModalResolver || !this._connectModalResolver.isResulted) {
      this._connectModalResolver = ModalController.create(AuthConnectModal, {
        onSelect: (authConnectorType) => {
          this.signIn(authConnectorType).then(() => {
            if (this._connectModalResolver) {
              this._connectModalResolver.resolve();
              this._connectModalResolver = null;
            }
          });
        },
      });
    }

    await this._connectModalResolver;
  }

  private _updateAuthConnector(authConnectorType?: string) {
    if (authConnectorType) {
      const authConnector = AuthConnectorsDictionary.get(authConnectorType);
      this._local.connectorType = authConnector.info.type;
      this._selectedAuthConnector = authConnector.getConnector();
    } else {
      this._local.connectorType = null;
      this._selectedAuthConnector = null;
    }
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
    this._updateAuthConnector(this._local?.connectorType || 'telegram');
  }
}
