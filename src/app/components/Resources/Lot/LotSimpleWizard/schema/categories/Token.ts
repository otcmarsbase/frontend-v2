import * as yup from 'yup';

import { TOKEN_VESTING_PERIOD } from '../inputs';

export const TokenInputs = yup.object({
  TOKEN_VESTING_PERIOD,
});

export type TokenModel = yup.InferType<typeof TokenInputs>;
