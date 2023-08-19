import { createContext, useContext } from 'react';

import { AuthLocalStore, authLocalStore } from './authLocalStore';
import { DashboardStore } from './dashboardStore';
import { InstanceStore, instanceStore } from './instanceStore';
import { SellOfferStore } from './sellOfferStore';
import { UserEntityStore } from './userEntityStore';

export class RootStore {
  readonly sellOfferStore: SellOfferStore;
  readonly dashboardStore: DashboardStore;
  readonly userEntityStore: UserEntityStore;
  readonly instanceStore: InstanceStore = instanceStore;
  readonly authLocalStore: AuthLocalStore = authLocalStore;

  constructor() {
    this.sellOfferStore = new SellOfferStore();
    this.dashboardStore = new DashboardStore({ rootStore: this });
    this.userEntityStore = new UserEntityStore({ rootStore: this });
  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
