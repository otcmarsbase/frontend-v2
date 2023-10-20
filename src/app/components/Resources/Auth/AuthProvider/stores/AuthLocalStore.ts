import { makeAutoObservable } from 'mobx';

import { AuthConnectorType } from '../info';

export class AuthLocalStore {
  token: string;
  connectorType: AuthConnectorType;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
