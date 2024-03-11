import { LocationDictionary } from '@app/dictionary';
import { InputTelegramRegex } from '@shared/ui-kit';
import * as yup from 'yup';

const NameRegex = /^[a-zA-Z '-]+$/g;

export const ProfileSchema = yup.object({
  firstName: yup.string().matches(NameRegex, 'Name is not valid').min(1).max(100),
  lastName: yup.string().matches(NameRegex, 'Last Name is not valid').min(1).max(100),
  email: yup.string().email(),
  telegram: yup.string().matches(InputTelegramRegex, 'Telegram username is not valid').min(5).max(32),
  location: yup.string().oneOf(LocationDictionary.keys()),
});

export type ProfileModel = Required<yup.InferType<typeof ProfileSchema>>;
