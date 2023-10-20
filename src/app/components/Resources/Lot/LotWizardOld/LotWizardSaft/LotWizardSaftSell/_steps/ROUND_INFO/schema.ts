import { InvestmentRoundDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';
import * as yup from 'yup';

import { RoundInfoModel } from './types';

export const roundInfoSchema: yup.ObjectSchema<RoundInfoModel> = yup.object({
  round: yup.mixed<Resource.Common.Enums.InvestRound>().oneOf(InvestmentRoundDictionary.keys()),
  roundFDV: yup.string(),
  contractValue: yup.string(),
  totalEquityBought: yup.number().required(),
  pricePerEquity: yup.string().required(),
  description: yup.string(),
  estimateTGEDate: yup.date().nullable(),
  isTBD: yup.boolean().nullable(),
  vestingCalendar: yup.string().nullable(),
  lockupPeriod: yup.string().nullable(),
  alreadyOver: yup.boolean().nullable(),
});
