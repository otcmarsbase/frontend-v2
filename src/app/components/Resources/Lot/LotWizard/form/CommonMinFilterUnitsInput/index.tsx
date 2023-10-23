import { FC, useMemo } from 'react';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';
import { useMultiplicatorValue } from '../useMultiplicatorValue';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_MIN_FILTER_UNITS';

export const CommonMinFilterUnitsInput: FC<BaseInputProps> = () => {
  const { watch } = useInput(NAME);
  const type = watch('type');
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const { serializeValue, deserializeValue } = useMultiplicatorValue(type);

  return (
    <FormControlNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
    />
  );
};
