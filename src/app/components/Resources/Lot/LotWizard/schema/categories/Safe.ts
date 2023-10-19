import * as yup from 'yup';

import { SAFE_WITH_TOKEN_WARRANT_INPUT } from '../inputs';

import { CommonInputs } from './Common';
import { InvestDocInputs, InvestDocRoundInputs } from './InvestDoc';

export const SafeInputs = yup
  .object({
    SAFE_WITH_TOKEN_WARRANT_INPUT,
  })
  .concat(CommonInputs)
  .concat(InvestDocInputs);

export const SafeBuyInputs = SafeInputs.clone();
export const SafeSellInputs = SafeInputs.concat(InvestDocRoundInputs);
