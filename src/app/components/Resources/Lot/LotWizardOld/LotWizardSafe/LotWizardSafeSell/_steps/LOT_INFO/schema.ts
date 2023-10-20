import * as yup from 'yup';

import { PricingModel, PricingModelDictionary } from '../../../../const';

import { LotInfoModel } from './types';

export const lotInfoSchema: yup.ObjectSchema<LotInfoModel> = yup.object({
  pricingModel: yup.mixed<PricingModel>().oneOf(PricingModelDictionary.keys()),
  minSize: yup.number().required(),
  quantity: yup.number().required(),
  targetFDV: yup.string().required(),
  price: yup.string().required(),
});
