import { CommonInputs } from './Common';
import { InvestDocInputs } from './InvestDoc';
import { TokenInputs } from './Token';

export const TokenWarrantInputs = CommonInputs.concat(InvestDocInputs).concat(TokenInputs);
