import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { AppConfig } from '@shared/config';

export class AuthLocalStore {
  authToken: string;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: AppConfig.storage.AUTH_META_LOCAL_STORAGE_KEY,
      properties: ['authToken'],
      storage: window.localStorage,
    });
  }
}

export const authLocalStore = new AuthLocalStore();
