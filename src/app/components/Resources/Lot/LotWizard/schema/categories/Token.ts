import * as yup from 'yup';

import {
  TOKEN_LOCKUP_PERIOD,
  TOKEN_TGE,
  TOKEN_VESTING_PERIOD,
  TOKEN_TGE_IS_TBD,
  TOKEN_IS_ALREADY_OVER,
} from '../inputs';

export const TokenInputs = yup.object({
  TOKEN_LOCKUP_PERIOD,
  TOKEN_TGE,
  TOKEN_VESTING_PERIOD,
  TOKEN_TGE_IS_TBD,
  TOKEN_IS_ALREADY_OVER,
});

export type TokenModel = yup.InferType<typeof TokenInputs>;
