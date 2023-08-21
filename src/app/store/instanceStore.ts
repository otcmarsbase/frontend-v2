import { makeAutoObservable } from 'mobx';

export class InstanceStore {
  // TODO: replace typings to Resource
  user: { id: string; publicAddress: string } = null;

  get isUserLoggedIn(): boolean {
    return !!this.user;
  }

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const instanceStore = new InstanceStore();
