import { autorun, makeAutoObservable, when } from 'mobx';

import { AuthStore } from './stores/AuthStore';
import { FavoriteLotStore } from './stores/FavoriteLotStore';
import { SystemStore } from './stores/SystemStore';

export class RootStore {
  static create() {
    return makeAutoObservable(new RootStore(), {}, { autoBind: true });
  }

  public readonly systemStore: SystemStore;
  public readonly favoriteLotStore: FavoriteLotStore;
  public readonly authStore: AuthStore;

  private constructor() {
    this.systemStore = SystemStore.getStore();
    this.authStore = AuthStore.getStore();
    this.favoriteLotStore = FavoriteLotStore.getStore();
  }

  async start() {
    this.systemStore.start();
    await this.authStore.start();
    // this.favoriteLotStore.start();
  }

  async stop() {}
}

export const rootStore = RootStore.create();
