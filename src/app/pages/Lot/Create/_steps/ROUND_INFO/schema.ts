import { InvestmentRoundDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import * as yup from 'yup';

import { RoundInfoModel } from './View';

export const roundInfoSchema: yup.ObjectSchema<RoundInfoModel> = yup.object({
  round: yup.mixed<Resource.Common.RoundType>().oneOf(InvestmentRoundDictionary.keys()),
  roundFDV: yup.string(),
  contractValue: yup.string(),
  isBestBid: yup.boolean(),
  totalEquityBought: yup.number().required(),
  pricePerEquity: yup.string().required(),
  description: yup.string(),
});
