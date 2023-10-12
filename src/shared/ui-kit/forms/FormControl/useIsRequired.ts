import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import get from 'lodash/get';
import { ObjectSchema, SchemaDescription } from 'yup';

export function useIsRequired<T extends ObjectSchema<object>>(schema: T) {
  const methods = useFormContext();

  return useCallback(
    (name: keyof T['fields']) => {
      const { fields } = schema.describe({ value: methods.getValues() });
      const field = get(fields, name) as SchemaDescription;
      return !field.optional;
    },
    [schema, methods],
  );
}
