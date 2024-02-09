import * as yup from 'yup';

import { CommonInputs } from './Common';
import { InvestDocInputs } from './InvestDoc';

export const EquityInputs = yup.object({}).concat(CommonInputs).concat(InvestDocInputs);
