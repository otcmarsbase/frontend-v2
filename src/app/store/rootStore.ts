import { createContext, useContext } from 'react';

import { AuthLocalStore, authLocalStore } from './authLocalStore';
import { DashboardStore } from './dashboardStore';
import { InstanceStore, instanceStore } from './instanceStore';
import { SellOfferStore } from './sellOfferStore';

export class RootStore {
  readonly sellOfferStore: SellOfferStore;
  readonly dashboardStore: DashboardStore;
  readonly instanceStore: InstanceStore = instanceStore;
  readonly authLocalStore: AuthLocalStore = authLocalStore;

  constructor() {
    this.sellOfferStore = new SellOfferStore();
    this.dashboardStore = new DashboardStore({ rootStore: this });
    this.instanceStore = new InstanceStore();
    this.authLocalStore = new AuthLocalStore();
  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
