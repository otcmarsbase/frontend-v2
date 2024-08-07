import { LotTypeDictionary } from '@app/dictionary';
import * as yup from 'yup';

import { CommonInputs, InvestDocInputs, TokenInputs } from './categories';
import { BoosterInfo } from './categories/BoosterInfo';
import { SAFE_WITH_TOKEN_WARRANT } from './inputs';

export const LotCreateSchema = yup
  .object({
    id: yup.number(),
    type: yup.string().oneOf(LotTypeDictionary.keys()).required(),
    SAFE_WITH_TOKEN_WARRANT,
  })
  .concat(CommonInputs)
  .concat(InvestDocInputs)
  .concat(TokenInputs)
  .concat(BoosterInfo);

export type LotCreateModel = yup.InferType<typeof LotCreateSchema>;
