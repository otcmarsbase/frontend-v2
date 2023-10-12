import { createContext } from 'react';

import { ObjectSchema } from 'yup';

export interface FormContext {
  schema: ObjectSchema<object>;
}

export interface CreateLotContextValue {
  formContext: FormContext;
  setFormSchema: (schema: FormContext['schema']) => void;
}

export const CreateLotContext = createContext<CreateLotContextValue>(undefined);
