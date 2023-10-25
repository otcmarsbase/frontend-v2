import { InvestmentRoundDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import * as yup from 'yup';

import { RoundInfoModel } from './types';

export const roundInfoSchema: yup.ObjectSchema<RoundInfoModel> = yup.object({
  round: yup.mixed<Resource.Common.Enums.InvestRound>().oneOf(InvestmentRoundDictionary.keys()),
  roundFDV: yup.number(),
  contractValue: yup.number(),
  totalEquityBought: yup.number().required(),
  pricePerEquity: yup.number().required(),
});
