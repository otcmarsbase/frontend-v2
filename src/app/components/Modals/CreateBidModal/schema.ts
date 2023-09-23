import { LocationDictionary, ParticipantTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import * as yup from 'yup';

import { CreateBidModel } from '.';

export const createBidSchema: yup.ObjectSchema<CreateBidModel> = yup.object({
  toSellCount: yup.number().required(),
  fundsCount: yup.number().required(),
  deadline: yup.date().required(),
  bidderType: yup.mixed<Resource.Common.ParticipantType>().oneOf(ParticipantTypeDictionary.keys()).required(),
  isDirect: yup.boolean(),
  location: yup.mixed<Resource.Common.Location>().oneOf(LocationDictionary.keys()).required(),
  isReadyForKYC: yup.boolean(),
  telegram: yup.string().required(),
});
