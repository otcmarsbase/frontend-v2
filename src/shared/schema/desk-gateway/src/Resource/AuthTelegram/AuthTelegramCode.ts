import { CoreSchema } from '@schema/core';

import { UserKey } from '../User';

import { AuthTelegramCodeKey } from './AuthTelegramCodeKey';

export interface AuthTelegramCode extends CoreSchema.Resource<'auth_telegram_code', AuthTelegramCodeKey> {
  expires: number;
  isExpired: boolean;
  userKey: UserKey;
}
