import * as yup from 'yup';

import { SAFE_WITH_TOKEN_WARRANT_INPUT } from '../inputs';
import { LotCreateModel } from '../LotCreate';

import { CommonInputs } from './Common';
import { InvestDocInputs, InvestDocRoundInputs } from './InvestDoc';

export const SafeBuyInputs = yup
  .object({
    SAFE_WITH_TOKEN_WARRANT_INPUT,
  })
  .concat(CommonInputs)
  .concat(InvestDocInputs);

export const SafeSellInputs = yup
  .object({
    SAFE_WITH_TOKEN_WARRANT_INPUT,
  })
  .concat(CommonInputs)
  .concat(InvestDocInputs)
  .concat(InvestDocRoundInputs);

export const SafeInputs = yup.lazy((data: LotCreateModel) => {
  if (!data) return yup.object();

  return data.COMMON_DIRECTION_INPUT === 'BUY' ? SafeBuyInputs : SafeSellInputs;
});
