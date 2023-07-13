import { createContext, useContext } from 'react';
import { CounterStore } from './counterStore';
import { ProfileType } from '../types/profile';
import {Web3ConnectStore} from "@/stores/web3Connect";
import {ModalsStore} from "@/stores/modalsStore";

export class RootStore {
  readonly counterStore: CounterStore;
  readonly web3ConnectStore: Web3ConnectStore;
  readonly modalStore: ModalsStore;
  constructor({ profile }: { profile: ProfileType }) {
    this.counterStore = new CounterStore({ rootStore: this });
    this.web3ConnectStore = new Web3ConnectStore();
    this.modalStore = new ModalsStore();
  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
