import * as yup from 'yup';

import { COMMON_PRICE } from '../inputs';

import { CommonInputs } from './Common';
import { InvestDocInputs } from './InvestDoc';

export const UnlockedTokensInputs = yup
  .object({})
  .concat(CommonInputs)
  .concat(InvestDocInputs)
  .shape({
    COMMON_PRICE: COMMON_PRICE.required(),
  })
  .omit(['INVEST_DOC_FDV']);
