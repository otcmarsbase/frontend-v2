import { StepRef } from '../../types';

import { PricingModelType } from './const';

export type LotInfoModel = {
  pricingModel: PricingModelType;
  minSize: number;
  quantity: number;
  targetFDV: string;
  price: string;
  isBestBid: boolean;
};

export type LotInfoStepRef = StepRef<LotInfoModel>;
