import * as yup from 'yup';

import { TOKEN_LOCKUP_PERIOD_INPUT, TOKEN_TGE_INPUT, TOKEN_VESTING_PERIOD_INPUT } from '../inputs';

export const TokenInputs = yup.object({
  TOKEN_LOCKUP_PERIOD_INPUT,
  TOKEN_TGE_INPUT,
  TOKEN_VESTING_PERIOD_INPUT,
});

export type TokenModel = yup.InferType<typeof TokenInputs>;
