import { FC, useMemo } from 'react';

import { FormControlCheckboxInput } from '../FormControlCheckboxInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_IS_DIRECT';

export const CommonIsDirectInput: FC<BaseInputProps> = () => {
  const { watch } = useInput(NAME);
  const direction = watch('COMMON_DIRECTION');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  return <FormControlCheckboxInput name={NAME} label={descriptor.label} />;
};
