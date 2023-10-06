import { FieldErrors, Control, UseFormSetValue } from 'react-hook-form';

import { Resource } from '@schema/api-gateway';

export interface StepProps {
  isActive: boolean;
  lot: Resource.Lot.Lot;
}

export interface StepPropsByDirection<ModelType> {
  lot: Resource.Lot.Lot;
  errors: FieldErrors<ModelType>;
  isRequired: (name: keyof ModelType) => boolean;
  control: Control<ModelType>;
  setValue: UseFormSetValue<ModelType>;
}

export interface StepPropsByDocumentType {
  lot: Resource.Lot.Lot;
}
