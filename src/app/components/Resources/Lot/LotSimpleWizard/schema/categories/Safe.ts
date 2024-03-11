import * as yup from 'yup';

import { SAFE_WITH_TOKEN_WARRANT } from '../inputs';

import { CommonInputs } from './Common';
import { InvestDocInputs } from './InvestDoc';

export const SafeInputs = yup
  .object({
    SAFE_WITH_TOKEN_WARRANT,
  })
  .concat(CommonInputs)
  .concat(InvestDocInputs);
