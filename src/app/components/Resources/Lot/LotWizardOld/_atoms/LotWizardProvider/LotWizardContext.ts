import { createContext } from 'react';

import { ObjectSchema } from 'yup';

export interface FormContext<T extends object = object> {
  schema: ObjectSchema<T>;
}

export interface LotWizardContextValue<T extends object = object> {
  formContext: FormContext<T>;
  setFormSchema: (schema: FormContext['schema']) => void;
}

export const LotWizardContext = createContext<LotWizardContextValue>(undefined);
