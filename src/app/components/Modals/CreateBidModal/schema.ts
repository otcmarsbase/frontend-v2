import { LocationDictionary, ParticipantTypeDictionary } from '@app/dictionary';
import * as yup from 'yup';

export const BidCreateSchema = yup.object({
  lot: yup.number().required(),
  contractValue: yup.number().required().moreThan(yup.ref('$minContractValue')),
  fundsCount: yup.number().required().moreThan(yup.ref('$minFundsCount')),
  deadline: yup.date(),
  bidMakerType: yup.string().required().oneOf(ParticipantTypeDictionary.keys()),
  isDirect: yup.boolean().default(false),
  location: yup.string().required().oneOf(LocationDictionary.keys()),
  readyForVerification: yup.boolean().default(false),
  telegram: yup.string().required(),
});

export type CreateBidModel = Required<yup.InferType<typeof BidCreateSchema>>;
