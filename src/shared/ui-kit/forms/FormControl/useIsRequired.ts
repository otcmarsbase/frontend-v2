import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { ObjectSchema, SchemaDescription } from 'yup';

export function useIsRequired<T extends ObjectSchema<object>>(schema: T) {
  const methods = useFormContext();

  return useCallback(
    (name: keyof T['fields']) => {
      const field = schema.describe({ value: methods.getValues() }).fields[name] as SchemaDescription;
      return !field.optional;
    },
    [schema, methods],
  );
}
