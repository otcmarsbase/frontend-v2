import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';
import { InputWebsiteRegex } from '@shared/ui-kit';
import * as yup from 'yup';

import { StartInfoModel } from './types';

export const startInfoSchema: yup.ObjectSchema<StartInfoModel> = yup.object({
  // TODO Asset | string (OR)
  // asset: yup.string().required('Project name is required'),
  asset: yup.mixed<Resource.Asset.Asset | string>().required('Project name is required'),
  direction: yup
    .mixed<Resource.Common.Enums.TradeDirection>()
    .oneOf(TradeDirectionDictionary.keys())
    .required('Trade direction is required'),
  type: yup.mixed<Resource.Lot.Enums.LotType>().oneOf(LotTypeDictionary.keys()).required('Type of lot is required'),
  isReassigned: yup.boolean(),
  withTokenWarrant: yup.boolean(),
  website: yup
    .string()
    .when('asset', (asset, field) => {
      if (typeof asset === 'string') return field.required('Website is required');
      return field;
    })
    .matches(InputWebsiteRegex, 'Invalid URL format'),
});
