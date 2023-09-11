import { InvestmentRoundDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import * as yup from 'yup';

import { PricingModelType, PricingModelTypeDictionary } from './const';
import { LotInfoModel } from './View';

export const lotInfoSchema: yup.ObjectSchema<LotInfoModel> = yup.object({
  pricingModel: yup.mixed<PricingModelType>().oneOf(PricingModelTypeDictionary.keys()),
  minSize: yup.number().required(),
  quantity: yup.number().required(),
  targetFDV: yup.string().required(),
  price: yup.string().required(),
  isBestBid: yup.boolean(),
});
