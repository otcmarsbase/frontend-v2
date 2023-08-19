import { makeAutoObservable } from 'mobx';

export class InstanceStore {
  // TODO: replace typings to Resource
  user: { id: string; publicAddress: string } = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const instanceStore = new InstanceStore();
