import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

export namespace Account {
  export interface AccountKey extends ResourceKey<'account'> {
    id: string;
  }

  export interface Account extends Resource<'account'>, ResourceOmit<AccountKey> {
    registered_at: number;
    nickname: string;
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
