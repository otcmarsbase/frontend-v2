import * as yup from 'yup';

import { LotCreateModel } from '../LotCreate';

import { CommonInputs } from './Common';
import { InvestDocInputs, InvestDocRoundInputs } from './InvestDoc';
import { TokenInputs } from './Token';

export const SaftBuyInputs = CommonInputs.concat(InvestDocInputs);
export const SaftSellInputs = CommonInputs.concat(InvestDocInputs).concat(InvestDocRoundInputs).concat(TokenInputs);

export const SaftInputs = yup.lazy((data: LotCreateModel) => {
  if (!data) return yup.object();

  return data.COMMON_DIRECTION === 'BUY' ? SaftBuyInputs : SaftSellInputs;
});
