import { LotTypeDictionary } from '@app/dictionary';
import * as yup from 'yup';

import { CommonInputs, InvestDocInputs, InvestDocRoundInputs, TokenInputs } from './categories';

export const LotCreateSchema = yup
  .object({
    id: yup.number(),
    type: yup.string().oneOf(LotTypeDictionary.keys()).required().default('SAFE'),
  })
  .concat(CommonInputs)
  .concat(InvestDocInputs)
  .concat(InvestDocRoundInputs)
  .concat(TokenInputs);

export type LotCreateModel = yup.InferType<typeof LotCreateSchema>;
