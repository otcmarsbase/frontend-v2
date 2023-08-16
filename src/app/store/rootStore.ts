import { createContext, useContext } from 'react';
import { DashboardStore } from './dashboardStore';
import { SellOfferStore } from './sellOfferStore';

export class RootStore {
  // readonly web3ConnectStore: Web3ConnectStore;
  readonly sellOfferStore: SellOfferStore;
  readonly dashboardStore: DashboardStore;
  constructor() {
    // this.web3ConnectStore = new Web3ConnectStore();
    this.sellOfferStore = new SellOfferStore();
    this.dashboardStore = new DashboardStore({ rootStore: this });
  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
