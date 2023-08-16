import { UseFormReturn } from 'react-hook-form';

import {
  EPricingModel,
  ETypeOfDeal,
  TCreateOfferFieldTypes,
} from '../../types';
import { TLotType } from '../ProjectInfo/types';



export interface IHandleRecount {
  currentID: TCreateOfferFieldTypes;
  bindedID: TCreateOfferFieldTypes;
  value: string;
  pricingModel: EPricingModel;
}
export interface IProjectDetailsProps {
  form: UseFormReturn;
  lotType: TLotType;
  handleRecountValues: (params: IHandleRecount) => void;
  typeOfDeal: ETypeOfDeal;
}
