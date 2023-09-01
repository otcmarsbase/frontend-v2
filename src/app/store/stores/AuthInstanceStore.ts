import { Resource } from '@schema/api-gateway';

export class AuthInstanceStore {
  isLoading: boolean;
  account?: Resource.Account.Account;

  get isAuthorized() {
    return !!this.account;
  }
}
