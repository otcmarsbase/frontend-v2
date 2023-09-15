import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

export namespace Account {
  export interface AccountKey extends ResourceKey<'account'> {
    nickname: string;
  }

  export interface Account extends Resource<'account'>, ResourceOmit<AccountKey> {
    registered_at: number;

    profile: Profile;
    verification: Verification;
    auth_data?: AuthData;
  }

  export interface Profile {
    avatarUrl: string;
  }

  export interface Verification {
    is_verified: boolean;
  }

  export interface AuthData {
    walletAddress: string;
  }
}
