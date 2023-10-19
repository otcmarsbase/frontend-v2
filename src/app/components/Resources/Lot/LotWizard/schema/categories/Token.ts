import * as yup from 'yup';

import { TOKEN_LOCKUP_PERIOD, TOKEN_TGE, TOKEN_VESTING_PERIOD } from '../inputs';

export const TokenInputs = yup.object({
  TOKEN_LOCKUP_PERIOD,
  TOKEN_TGE,
  TOKEN_VESTING_PERIOD,
});

export type TokenModel = yup.InferType<typeof TokenInputs>;
