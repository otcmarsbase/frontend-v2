import { InvestmentRoundDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import * as yup from 'yup';

import { RoundInfoModel } from './types';

export const roundInfoSchema: yup.ObjectSchema<RoundInfoModel> = yup.object({
  round: yup.mixed<Resource.Common.Enums.InvestRound>().oneOf(InvestmentRoundDictionary.keys()),
  roundFDV: yup.string(),
  contractValue: yup.string(),
  totalEquityBought: yup.number().required(),
  pricePerEquity: yup.string().required(),
});
