import { Resource } from '@schema/desk-gateway';

export class AuthInstanceStore {
  isLoading: boolean;
  account?: Resource.Account.Account;

  get isAuthorized() {
    return !!this.account;
  }
}
