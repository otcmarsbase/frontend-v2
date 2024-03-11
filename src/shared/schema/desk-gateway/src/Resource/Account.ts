import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

import { Common } from './Common';

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

  export interface Profile {
    firstName?: string;
    lastName?: string;
    telegram?: Common.Text.Telegram;
    email?: Common.Text.Email;
    location?: Common.Enums.Location;
  }

  export interface Verification {
    is_verified: boolean;
  }

  export interface AuthData {
    walletAddress: string;
  }
}
