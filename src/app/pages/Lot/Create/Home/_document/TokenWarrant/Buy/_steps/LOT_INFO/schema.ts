import * as yup from 'yup';

import { PricingModelType, PricingModelTypeDictionary } from '../../../../../const';

import { LotInfoModel } from './types';

export const lotInfoSchema: yup.ObjectSchema<LotInfoModel> = yup.object({
  pricingModel: yup.mixed<PricingModelType>().oneOf(PricingModelTypeDictionary.keys()),
  minSize: yup.number().required(),
  quantity: yup.number().required(),
  targetFDV: yup.string().required(),
  price: yup.string().required(),
});
