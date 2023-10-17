import { createContext } from 'react';

import { ObjectSchema } from 'yup';

export interface FormContext {
  schema: ObjectSchema<object>;
}

export interface LotWizardContextValue {
  formContext: FormContext;
  setFormSchema: (schema: FormContext['schema']) => void;
}

export const LotWizardContext = createContext<LotWizardContextValue>(undefined);
