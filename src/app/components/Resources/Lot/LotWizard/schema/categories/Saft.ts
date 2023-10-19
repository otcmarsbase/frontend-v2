import * as yup from 'yup';

import { CommonInputs } from './Common';
import { InvestDocInputs, InvestDocRoundInputs } from './InvestDoc';
import { TokenInputs } from './Token';

export const SaftInputs = yup
  .object()
  .concat(CommonInputs)
  .concat(InvestDocInputs)
  .concat(InvestDocRoundInputs)
  .concat(TokenInputs);
