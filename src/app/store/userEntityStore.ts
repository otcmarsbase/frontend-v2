import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { AppConfig } from '@shared/config';
import { RootStore } from './rootStore';

export class UserEntityStore {
  readonly rootStore: RootStore;

  public token: string;
  public expires: number;

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: AppConfig.storage.AUTH_META_LOCAL_STORAGE_KEY,
      properties: ['token', 'expires'],
      storage: localStorage,
    });
    this.rootStore = rootStore;
  }

  public setAuthMeta(token: string, expires: number) {
    this.token = token;
    this.expires = expires;
  }

  public clearAuthMeta() {
    this.token = '';
    this.expires = 0;
  }
}
