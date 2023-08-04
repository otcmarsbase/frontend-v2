import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { constants } from '@shared/config';
import { RootStore } from './rootStore';

export enum DashboardListType {
  ORDERS = 'orders',
  BIDS = 'bids',
}

export interface DashboardFilters {
  showAll: boolean;
  showActive: boolean;
  showModerated: boolean;
  showDraft: boolean;
}

export class DashboardStore {
  readonly rootStore: RootStore;

  public listType: DashboardListType = DashboardListType.ORDERS;

  public filters: DashboardFilters = {
    showAll: false,
    showActive: false,
    showDraft: false,
    showModerated: false,
  };

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: constants.DASHBOARD_LOCAL_STORAGE_KEY,
      properties: ['filters'],
      storage: localStorage,
    });
    this.rootStore = rootStore;
  }

  public changeListType(listType: DashboardListType) {
    this.listType = listType;
  }

  public changeFilters(
    filterKey: keyof DashboardFilters,
    filterValue: DashboardFilters[typeof filterKey],
  ) {
    this.filters[filterKey] = filterValue;
  }
}
