import { Resource } from '@schema/otc-desk-gateway';

export class AuthInstanceStore {
  isLoading: boolean;
  account?: Resource.Account.Account;

  get isAuthorized() {
    return !!this.account;
  }
}
