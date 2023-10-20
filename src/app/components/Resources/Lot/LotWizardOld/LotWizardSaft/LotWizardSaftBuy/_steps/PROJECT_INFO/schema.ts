import { ParticipantTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';
import * as yup from 'yup';

import { ProjectInfoModel } from './types';

export const projectInfoSchema: yup.ObjectSchema<ProjectInfoModel> = yup.object({
  isDirect: yup.boolean(),
  isReadyToSPV: yup.boolean(),
  isPermanent: yup.boolean(),
  isNoLimit: yup.boolean(),
  offerMakerType: yup
    .mixed<Resource.Common.Enums.InvestorType>()
    .oneOf(ParticipantTypeDictionary.keys())
    .required('Type of buyer is required'),
  bidderType: yup
    .array()
    .of(yup.string().oneOf(ParticipantTypeDictionary.keys()))
    .nullable()
    .when('isNoLimit', ([isNoLimit], field) => (isNoLimit ? field : field.required('Type of seller is required'))),
  telegram: yup.string().required('Telegram is required'),
  deadline: yup
    .date()
    .nullable()
    .when('isPermanent', ([isPermanent], field) => (isPermanent ? field : field.required('Deadline is required'))),
});
