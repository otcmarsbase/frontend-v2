import { useCallback, useMemo } from 'react';
import { FieldError, FieldPath, FieldPathValue, useFormContext, useFormState, useWatch } from 'react-hook-form';

import { reach, SchemaDescription } from 'yup';

import { useLotWizard } from '../_atoms';
import { LotCreateModel } from '../schema';

export function useInput(name: FieldPath<LotCreateModel>) {
  const { formContext } = useLotWizard<LotCreateModel>();
  const { setValue: rhfSetValue, getValues } = useFormContext();

  const { errors } = useFormState<LotCreateModel>({ name });

  const error = useMemo(() => errors[name] as FieldError | undefined, [name, errors]);
  const isValid = useMemo(() => !error, [error]);

  // TODO: Fix value type
  const value = useWatch<LotCreateModel>({ name }) as any;

  const setValue = useCallback(
    (value: FieldPathValue<LotCreateModel, typeof name>) => {
      rhfSetValue(name, value);
    },
    [rhfSetValue, name],
  );

  const isRequired = useMemo(() => {
    if (!formContext.schema) return false;

    const schema = reach(formContext.schema, name, getValues());
    const field = schema.describe() as SchemaDescription;
    return !field.optional;
  }, [name, formContext.schema, getValues]);

  return { isRequired, isValid, error, value, setValue };
}
