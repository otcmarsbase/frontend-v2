import { LocationDictionary, ParticipantTypeDictionary } from '@app/dictionary';
import { InputTelegramRegex } from '@shared/ui-kit';
import * as yup from 'yup';

export const BidCreateSchema = yup.object({
  lotId: yup.number().required(),
  deadline: yup.date(),
  bidMakerType: yup.string().required().oneOf(ParticipantTypeDictionary.keys()),
  isDirect: yup.boolean().default(false),
  location: yup.string().required().oneOf(LocationDictionary.keys()),
  readyForVerification: yup.boolean().default(false),
  telegram: yup.string().matches(InputTelegramRegex, 'Telegram username is not valid').min(5).max(32).required(),
  units: yup.number().required().min(yup.ref('$minUnits')).max(yup.ref('$maxUnits')),
  summary: yup.number().required().min(yup.ref('$minSummary')).max(yup.ref('$maxSummary')),
  price: yup.number().required(),
  fdv: yup.number(),
});

export type CreateBidModel = Required<yup.InferType<typeof BidCreateSchema>>;
