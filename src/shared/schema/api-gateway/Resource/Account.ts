import { Resource, ResourceOmit } from '@schema/common';

import { User } from './User';

export namespace Account {
  export interface Account extends Resource<'account'>, ResourceOmit<User.UserKey> {
    registered_at: number;

    profile: Profile;
    verification: Verification;
    auth_data?: AuthData;
  }

  export interface Profile {}

  export interface Verification {
    is_verified: boolean;
  }

  export interface AuthData {
    walletAddress: string;
  }
}
