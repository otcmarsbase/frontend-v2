import { CommonInputs } from './Common';
import { InvestDocInputs } from './InvestDoc';
import { TokenInputs } from './Token';

export const SaftInputs = CommonInputs.concat(InvestDocInputs).concat(TokenInputs);
