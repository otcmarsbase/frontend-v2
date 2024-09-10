import { autorun, makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { appManager } from '@app/logic';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import remove from 'lodash/remove';
import { v4 as uuid } from 'uuid';

import { AuthStore } from './AuthStore';

export class FavoriteLotStore {
  static _instance: FavoriteLotStore;

  static getStore() {
    if (!this._instance) this._instance = new FavoriteLotStore();
    return this._instance;
  }

  private _authStore: AuthStore;

  favoriteLots: DeskGatewaySchema.FavoriteLot[] = [];
  isFetching: boolean;

  private constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this._authStore = AuthStore.getStore();

    autorun(() => {
      if (this._authStore.isAuthorized) {
        this.fetchItems();
      }
    });
  }

  async start() {
    await this.fetchItems();
  }

  async fetchItems() {
    try {
      this.isFetching = true;
      const { schema } = appManager.serviceManager.backendApiService;
      const { items } = await schema.send('favoriteLot.list', {});
      this.favoriteLots = items;
    } finally {
      this.isFetching = false;
    }
  }

  isFavorite(lotId: number) {
    return this.favoriteLots.some((item) => item.lotKey.id === lotId);
  }

  async toggleFavorite(lotId: number) {
    const favoriteLot = this.favoriteLots.find((item) => item.lotKey.id === lotId);

    if (favoriteLot) {
      await this.delete(favoriteLot.id);
    } else {
      await this.create(lotId);
    }

    if (this._authStore.isAuthorized) {
      await this.fetchItems();
    }
  }

  async delete(id: string) {
    const { schema } = appManager.serviceManager.backendApiService;

    remove(this.favoriteLots, (item) => item.id === id);

    if (this._authStore.isAuthorized) {
      await schema.send('favoriteLot.delete', { id });
    }
  }

  async create(lotId: number) {
    const { schema } = appManager.serviceManager.backendApiService;

    this.favoriteLots.push({
      id: uuid(),
      resource: 'favorite_lot',
      lotKey: {
        id: lotId,
        resource: 'lot_key',
      },
      createdAt: Date.now(),
      userKey: {
        id: 'unauth',
        resource: 'user_key',
      },
    });

    if (this._authStore.isAuthorized) {
      await schema.send('favoriteLot.create', { lot: lotId });
    }
  }
}
