import { Resource } from '@schema/api-gateway';

export class AuthInstanceStore {
  account?: Resource.Account.Account;

  get isAuthorized() {
    return !!this.account;
  }
}
