import { LotTypeDictionary, ParticipantTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import { InputWebsiteRegex } from '@shared/ui-kit';
import * as yup from 'yup';

import { ProjectInfoModel } from './View';

export const projectInfoSchema: yup.ObjectSchema<ProjectInfoModel> = yup.object({
  deadline: yup.date(),
  isDirect: yup.boolean(),
  isReadyToSPV: yup.boolean(),
  isPermanent: yup.boolean(),
  isNoLimit: yup.boolean(),
  typeOfSeller: yup
    .mixed<Resource.Common.ParticipantType>()
    .oneOf(ParticipantTypeDictionary.keys())
    .required('Type of seller is required'),
  typeOfBuyer: yup
    .mixed<Resource.Common.ParticipantType>()
    .oneOf(ParticipantTypeDictionary.keys())
    .required('Type of buyer is required'),
  telegram: yup.string().required('Telegram is required'),
  website: yup.string().required('Website is required').matches(InputWebsiteRegex, 'Invalid URL format'),
});
