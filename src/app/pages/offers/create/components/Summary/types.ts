import { ETypeOfDeal, TPricingModel } from '../../types';
import { TLotType } from '../ProjectInfo/types';

import { EStepTypes } from './constants';

export interface IStepWrapperProps {
  isSuccessFilled: boolean;
  step: EStepTypes;
  data: any;
  lotType: TLotType;
  pricingModel: TPricingModel;
  stepWasOpened: boolean;
}

export interface ISummaryProps {
  onPublishLot: () => void;
  lotType: TLotType;
  typeOfDeal: ETypeOfDeal;
}
export interface IGetTargetFieldsProps {
  step: EStepTypes;
  lotType: TLotType;
  pricingModel: TPricingModel;
}
export interface INormFieldsReturn {
  name: string;
  value: string;
}
