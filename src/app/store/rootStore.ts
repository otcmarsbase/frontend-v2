import { makeAutoObservable } from 'mobx';

import { AuthInstanceStore, MockStore } from './stores';

export class RootStore {
  static create() {
    return makeAutoObservable(new RootStore(), {}, { autoBind: true });
  }

  // public readonly authLocalStore: AuthLocalStore;
  public readonly authInstanceStore: AuthInstanceStore;
  public readonly mockStore: MockStore;

  // private _persistStore: PersistStore<AuthLocalStore, 'authToken'>;

  private constructor() {
    // this.authLocalStore = makeAutoObservable(new AuthLocalStore(), {}, { autoBind: true });
    this.authInstanceStore = makeAutoObservable(new AuthInstanceStore(), {}, { autoBind: true });
    this.mockStore = makeAutoObservable(new MockStore(), {}, { autoBind: true });
  }

  async start() {
    // if (!this._persistStore) {
    //   this._persistStore = await makePersistable(this.authLocalStore, {
    //     name: AppConfig.storage.AUTH_META_LOCAL_STORAGE_KEY,
    //     properties: ['authToken'],
    //     storage: window.localStorage,
    //   });
    // }
  }

  async stop() {
    // if (this._persistStore) {
    //   this._persistStore.stopPersisting();
    //   this._persistStore = null;
    // }
  }
}

export const rootStore = RootStore.create();
