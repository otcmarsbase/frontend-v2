import { makeAutoObservable } from 'mobx';

export class AuthLocalStore {
  token: string;
  connectorType: string;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
