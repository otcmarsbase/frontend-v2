import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

export namespace User {
  export interface UserKey extends ResourceKey<'user'> {
    nickname: string;
  }

  export interface User extends Resource<'user'>, ResourceOmit<UserKey> {
    registered_at: number;
    is_verified: boolean;
  }
}