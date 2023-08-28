import { LotFlow } from '@shared/types';

import { EStepTypes } from './constants';

export interface IGetTargetFieldsProps {
  step: EStepTypes;
  lotType: LotFlow.LotType;
  pricingModel: LotFlow.PricingModel;
}
export interface INormFieldsReturn {
  name: string;
  value: string;
}
