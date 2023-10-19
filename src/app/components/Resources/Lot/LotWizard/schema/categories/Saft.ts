import * as yup from 'yup';

import { CommonInputs } from './Common';
import { InvestDocInputs, InvestDocRoundInputs } from './InvestDoc';
import { TokenInputs } from './Token';

export const SaftInputs = yup.object().concat(CommonInputs).concat(InvestDocInputs);
export const SaftBuyInputs = SaftInputs.clone();
export const SaftSellInputs = SaftInputs.concat(InvestDocRoundInputs).concat(TokenInputs);
