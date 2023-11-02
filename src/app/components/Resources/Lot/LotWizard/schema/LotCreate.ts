import { LotTypeDictionary } from '@app/dictionary';
import * as yup from 'yup';

import { CommonInputs, InvestDocInputs, InvestDocRoundInputs, TokenInputs } from './categories';
import {
  COMMON_BID_MAKER_TYPES,
  COMMON_DEADLINE,
  COMMON_IS_NO_LIMIT,
  COMMON_IS_PERMANENT,
  SAFE_WITH_TOKEN_WARRANT,
  TOKEN_TGE,
  TOKEN_TGE_IS_TBD,
} from './inputs';

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

export const LotCreateMappingSchema = LotCreateSchema.shape({
  COMMON_BID_MAKER_TYPES,
  COMMON_IS_NO_LIMIT: COMMON_IS_NO_LIMIT.when('COMMON_BID_MAKER_TYPES', ([types], field) =>
    types?.length ? field : field.default(true),
  ),
  COMMON_DEADLINE,
  COMMON_IS_PERMANENT: COMMON_IS_PERMANENT.when('COMMON_DEADLINE', ([deadline], field) =>
    deadline ? field : field.default(true),
  ),
  TOKEN_TGE,
  TOKEN_TGE_IS_TBD: TOKEN_TGE_IS_TBD.when('TOKEN_TGE', ([tge], field) => (tge === 'TBD' ? field.default(true) : field)),
});
