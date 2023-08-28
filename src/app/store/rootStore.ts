import { makeAutoObservable } from 'mobx';
import { PersistStore, makePersistable } from 'mobx-persist-store';

import { AppConfig } from '@shared/config';

import { AuthLocalStore, AuthInstanceStore } from './stores';

export class RootStore {
  private static _instance: RootStore;

  static get instance() {
    if (!this._instance) {
      this._instance = makeAutoObservable(new RootStore(), {}, { autoBind: true });
    }
    return this._instance;
  }

  public readonly authLocalStore: AuthLocalStore;
  public readonly authInstanceStore: AuthInstanceStore;

  private _persistStore: PersistStore<AuthLocalStore, 'authToken'>;

  private constructor() {
    this.authLocalStore = makeAutoObservable(new AuthLocalStore(), {}, { autoBind: true });
    this.authInstanceStore = makeAutoObservable(new AuthInstanceStore(), {}, { autoBind: true });
  }

  async start() {
    if (!this._persistStore) {
      this._persistStore = await makePersistable(this.authLocalStore, {
        name: AppConfig.storage.AUTH_META_LOCAL_STORAGE_KEY,
        properties: ['authToken'],
        storage: window.localStorage,
      });
    }
  }

  async stop() {
    if (this._persistStore) {
      this._persistStore.stopPersisting();
      this._persistStore = null;
    }
  }
}
