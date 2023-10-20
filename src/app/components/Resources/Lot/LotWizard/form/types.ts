import { FieldPath } from 'react-hook-form';

import { LotCreateModel } from '../schema';

export interface BaseInputProps {}

export interface InputDescriptor {
  name?: FieldPath<LotCreateModel>;
  label?: string;
  tooltip?: string;
  placeholder?: string;
}

export interface NumberInputDescriptor extends InputDescriptor {
  rightElementText?: string;
}
