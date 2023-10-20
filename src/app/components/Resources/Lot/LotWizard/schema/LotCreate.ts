import { LotTypeDictionary } from '@app/dictionary';
import * as yup from 'yup';

import { CommonInputs, InvestDocInputs, InvestDocRoundInputs, TokenInputs } from './categories';
import { SAFE_WITH_TOKEN_WARRANT } from './inputs';

export const LotCreateSchema = yup
  .object({
    id: yup.number(),
    type: yup.string().oneOf(LotTypeDictionary.keys()).required().default('SAFE'),
    SAFE_WITH_TOKEN_WARRANT,
  })
  .concat(CommonInputs)
  .concat(InvestDocInputs)
  .concat(InvestDocRoundInputs)
  .concat(TokenInputs);

export type LotCreateModel = yup.InferType<typeof LotCreateSchema>;
