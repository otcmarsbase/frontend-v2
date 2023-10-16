import { useCallback } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';

import get from 'lodash/get';
import { ObjectSchema, SchemaDescription } from 'yup';

export function useIsRequired<T extends ObjectSchema<object>>(schema: T, getValuesFn?: () => FieldValues) {
  const methods = useFormContext();
  const getValues = getValuesFn ?? methods.getValues;

  return useCallback(
    (name: keyof T['fields']) => {
      const { fields } = schema.describe({ value: getValues() });
      const field = get(fields, name) as SchemaDescription;
      return !field.optional;
    },
    [schema, getValues],
  );
}
