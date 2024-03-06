import { LocationDictionary } from '@app/dictionary';
import { InputTelegramRegex } from '@shared/ui-kit';
import * as yup from 'yup';

export const ProfileSchema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email(),
  telegram: yup.string().matches(InputTelegramRegex, 'Telegram username is not valid').min(5).max(32),
  location: yup.string().oneOf(LocationDictionary.keys()),
});

export type ProfileModel = Required<yup.InferType<typeof ProfileSchema>>;
