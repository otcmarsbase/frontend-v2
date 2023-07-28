import { createContext, useContext } from 'react';
// import {Web3ConnectStore} from "@app/store/web3Connect";
import { SellOfferStore } from '@app/store/SellOfferStore';

export class RootStore {
  // readonly web3ConnectStore: Web3ConnectStore;
  readonly SellOfferStore: SellOfferStore;
  constructor() {
    // this.web3ConnectStore = new Web3ConnectStore();
    this.SellOfferStore = new SellOfferStore();
  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
