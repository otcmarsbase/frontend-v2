import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { constants } from '@shared/config';
import { OTCDeskFilters } from '@shared/types';
import { RootStore } from './rootStore';

export class UserEntityStore {
  readonly rootStore: RootStore;

  public filters: OTCDeskFilters = {};

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: constants.OTC_DESK_LOCAL_STORAGE_KEY,
      properties: ['filters'],
      storage: localStorage,
    });
    this.rootStore = rootStore;
  }
}
