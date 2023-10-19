import { PricingModel } from '../../../../const';

export type LotInfoModel = {
  pricingModel: PricingModel;
  minSize: number;
  quantity: number;
  targetFDV: string;
  price: string;
};
