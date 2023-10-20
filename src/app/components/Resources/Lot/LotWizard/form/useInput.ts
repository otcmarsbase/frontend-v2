import { useCallback, useMemo } from 'react';
import { FieldPath, FieldPathValue, useFormContext, get } from 'react-hook-form';

import { useIsRequired } from '@shared/ui-kit';

import { LotCreateSchema, LotCreateModel } from '../schema';

export function useInput<T extends FieldPath<LotCreateModel>>(name: T) {
  const { setValue: rhfSetValue, trigger: rhfTrigger, formState, watch } = useFormContext<LotCreateModel>();

  const error = useMemo(() => get(formState.errors, name), [formState, name]);
  const isValid = useMemo(() => !error, [error]);

  const value = watch(name);

  const setValue = useCallback(
    (value: FieldPathValue<LotCreateModel, T>) => {
      rhfSetValue<T>(name, value);
    },
    [rhfSetValue, name],
  );

  const trigger = useCallback(() => rhfTrigger(name), [name, rhfTrigger]);

  const isRequired = useIsRequired(LotCreateSchema)(name);

  return { isRequired, isValid, error, value, setValue, rhfSetValue, trigger, rhfTrigger, formState, watch };
}
