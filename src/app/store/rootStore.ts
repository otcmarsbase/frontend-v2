import { createContext, useContext } from 'react';
import { SellOfferStore } from '@app/store/SellOfferStore';
import { DashboardStore } from './dashboardStore';

export class RootStore {
  // readonly web3ConnectStore: Web3ConnectStore;
  readonly SellOfferStore: SellOfferStore;
  readonly dashboardStore: DashboardStore;
  constructor() {
    // this.web3ConnectStore = new Web3ConnectStore();
    this.SellOfferStore = new SellOfferStore();
    this.dashboardStore = new DashboardStore({ rootStore: this });
  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
