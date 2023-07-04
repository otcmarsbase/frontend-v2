import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { RootStore } from './rootStore';

const COUNTER_PERSIST_LOCAL_STORAGE_KEY = 'OTC_MARSBASE/COUNTER_PERSIST';

export class CounterStore {
  private readonly rootStore: RootStore;

  public count = 0;

  constructor({ rootStore }: { rootStore: RootStore }) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: COUNTER_PERSIST_LOCAL_STORAGE_KEY,
      properties: ['count'],
      storage: window.localStorage,
    });
  }

  public plusOne() {
    this.count += 1;
  }

  public minusOne() {
    this.count -= 1;
  }
}
