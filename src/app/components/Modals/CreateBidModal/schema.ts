import { LocationDictionary, ParticipantTypeDictionary } from '@app/dictionary';
import { InputTelegramRegex } from '@shared/ui-kit';
import * as yup from 'yup';

export const BidCreateSchema = yup.object({
  lotId: yup.number().required(),
  bidMakerType: yup.string().required().oneOf(ParticipantTypeDictionary.keys()),
  isBroker: yup.boolean().default(false),
  location: yup.string().required().oneOf(LocationDictionary.keys()),
  readyForVerification: yup.boolean().default(false),
  telegram: yup.string().matches(InputTelegramRegex, 'Telegram username is not valid').min(5).max(32).required(),
  summary: yup.number().required().min(yup.ref('$minSummary')).max(yup.ref('$maxSummary')),
  price: yup.number().default(0),
  fdv: yup.number().required(),
  units: yup.number().nullable().default(0),
});

export type CreateBidModel = Required<yup.InferType<typeof BidCreateSchema>>;
