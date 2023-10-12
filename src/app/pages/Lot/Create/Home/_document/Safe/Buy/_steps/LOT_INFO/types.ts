import { PricingModelType } from '../../../../../const';

export type LotInfoModel = {
  pricingModel: PricingModelType;
  minSize: number;
  quantity: number;
  targetFDV: string;
  price: string;
};
