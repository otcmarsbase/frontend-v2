import { useRef, useEffect } from 'react';
import { FieldPath } from 'react-hook-form';

import { LotCreateModel } from '../schema';

import { useInput } from './useInput';

export function useDefaultValueSetter(name: FieldPath<LotCreateModel>, dependencyName: FieldPath<LotCreateModel>) {
  const { value, setValue, trigger, watch } = useInput(name);
  const isInitial = useRef(true);

  const dependency = watch(dependencyName);

  useEffect(() => {
    if (!isInitial.current) return;

    isInitial.current = false;

    if (!dependency || value) return;

    setValue(dependency);
    trigger();
  }, [value, dependency, setValue, trigger]);
}
