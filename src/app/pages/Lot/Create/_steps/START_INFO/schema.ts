import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import * as yup from 'yup';

import { StartInfoModel } from './View';

export const startInfoSchema: yup.ObjectSchema<StartInfoModel> = yup.object({
  projectName: yup.string().required('Project name is required'),
  direction: yup
    .mixed<Resource.Common.TradeDirection>()
    .oneOf(TradeDirectionDictionary.keys())
    .required('Trade direction is required'),
  type: yup.mixed<Resource.Lot.LotType>().oneOf(LotTypeDictionary.keys()).required('Type of lot is required'),
  isReassigned: yup.boolean(),
  withTokenWarrant: yup.boolean(),
});
