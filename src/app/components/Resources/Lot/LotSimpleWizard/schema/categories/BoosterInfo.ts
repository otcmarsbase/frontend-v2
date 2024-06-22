import { InvestmentRoundDictionary } from '@app/dictionary';
import * as yup from 'yup';

export const BoosterInfo = yup.object({
  BOOSTER_INFO_ROUND_TYPE: yup.string().oneOf(InvestmentRoundDictionary.keys()).nullable(),
  BOOSTER_INFO_FDV: yup.string().nullable(),
  BOOSTER_INFO_ROUND_PRICE: yup.string().nullable(),
  BOOSTER_INFO_PREVIOUS_ROUND_PRICE: yup.string().nullable(),
  BOOSTER_INFO_FUTURE_ROUND_PRICE: yup.string().nullable(),
  BOOSTER_INFO_LISTING_TIMELINE: yup.number().nullable(),
  BOOSTER_INFO_ADDITIONAL_INFO: yup.string().max(1000).nullable(),
})
