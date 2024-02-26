import { ReactNode } from 'react';
import { FieldPath } from 'react-hook-form';

import { LotCreateModel } from '../schema';

export interface BaseInputProps {
  serializeValue?(value: any): any;
  deserializeValue?(value: any): any;
}

export interface InputDescriptor {
  name?: FieldPath<LotCreateModel>;
  label?: string;
  tooltip?: ReactNode;
  placeholder?: string;
}
