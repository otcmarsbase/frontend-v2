import { DeskGatewaySchema } from '@schema/desk-gateway';

export class AuthInstanceStore {
  isLoading: boolean;
  account?: DeskGatewaySchema.Account;

  get isAuthorized() {
    return !!this.account;
  }
}
