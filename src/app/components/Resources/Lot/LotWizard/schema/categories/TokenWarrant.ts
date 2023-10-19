import * as yup from 'yup';

import { CommonInputs } from './Common';
import { InvestDocInputs, InvestDocRoundInputs } from './InvestDoc';
import { TokenInputs } from './Token';

export const TokenWarrantInputs = yup.object().concat(CommonInputs).concat(InvestDocInputs);
export const TokenWarrantBuyInputs = TokenWarrantInputs.clone();
export const TokenWarrantSellInputs = TokenWarrantInputs.concat(InvestDocRoundInputs).concat(TokenInputs);
