import { createContext, useContext } from 'react';
import { CounterStore } from './counterStore';
import { ProfileType } from '../types/profile';

export class RootStore {
  readonly counterStore: CounterStore;

  constructor({ profile }: { profile: ProfileType }) {
    this.counterStore = new CounterStore({ rootStore: this });
  }
}

export const StoresContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(StoresContext);
