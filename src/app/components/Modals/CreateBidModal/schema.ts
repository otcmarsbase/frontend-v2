import { LocationDictionary, ParticipantTypeDictionary } from '@app/dictionary';
import * as yup from 'yup';

export const BidCreateSchema = yup.object({
  lot: yup.number().required(),
  contractValue: yup.number().required().min(yup.ref('$minContractValue')).max(yup.ref('$maxContractValue')),
  fundsCount: yup.number().required().min(yup.ref('$minFundsCount')).max(yup.ref('$maxFundsCount')),
  deadline: yup.date(),
  bidMakerType: yup.string().required().oneOf(ParticipantTypeDictionary.keys()),
  isDirect: yup.boolean().default(false),
  location: yup.string().required().oneOf(LocationDictionary.keys()),
  readyForVerification: yup.boolean().default(false),
  price: yup.string().required(),
  telegram: yup
    .string()
    .matches(/[a-zA-Z0-9_]+$/g)
    .min(5)
    .max(32)
    .required(),
});

export type CreateBidModel = Required<yup.InferType<typeof BidCreateSchema>>;
