import { FC, useMemo } from 'react';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_MIN_FILTER_UNITS';

export const CommonMinFilterUnitsInput: FC<BaseInputProps> = () => {
  const { watch } = useInput(NAME);
  const type = watch('type');
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  return <FormControlNumberInput name={NAME} {...descriptor} />;
};