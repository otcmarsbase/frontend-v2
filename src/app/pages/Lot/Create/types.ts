import { UIKit } from '@shared/ui-kit';
import { ObjectSchema } from 'yup';

export interface StepRef<ModelType> {
  getValues: () => ModelType;
  onSubmit: () => Promise<ModelType>;
  isRequired: UIKit.UseFormIsRequired<ModelType>;
  isSkippable?: boolean;
  schema: ObjectSchema<ModelType>;
}

export interface StepFieldInfo {
  title: string;
  placeholder?: string;
  tooltip?: string;
}
