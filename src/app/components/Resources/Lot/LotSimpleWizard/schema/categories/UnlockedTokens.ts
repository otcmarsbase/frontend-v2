import * as yup from 'yup';

import { CommonInputs } from './Common';
import { InvestDocInputs } from './InvestDoc';

export const UnlockedTokensInputs = yup.object({}).concat(CommonInputs).concat(InvestDocInputs);
