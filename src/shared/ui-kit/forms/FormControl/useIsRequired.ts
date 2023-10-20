import { useCallback } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';

import get from 'lodash/get';
import { InferType, ObjectSchema, SchemaDescription } from 'yup';

export function useIsRequired<T extends ObjectSchema<object>>(schema: T, getValuesFn?: () => FieldValues) {
  const methods = useFormContext();
  const getValues = getValuesFn ?? methods.getValues;

  return useCallback(
    (name: FieldPath<InferType<T>>) => {
      try {
        const { fields } = schema.describe({ value: getValues() });
        const field = get(fields, name) as SchemaDescription;
        return !field.optional;
      } catch {
        return false;
      }
    },
    [schema, getValues],
  );
}
