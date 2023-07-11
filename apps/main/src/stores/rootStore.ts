import { createContext, useContext } from 'react';
import { CounterStore } from './counterStore';
import { ProfileType } from '../types/profile';
import {Web3ConnectStore} from "@/stores/web3Connect";

export class RootStore {
  readonly counterStore: CounterStore;
  readonly web3ConnectStore: Web3ConnectStore;
  constructor({ profile }: { profile: ProfileType }) {
    this.counterStore = new CounterStore({ rootStore: this });
    this.web3ConnectStore = new Web3ConnectStore();

  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
