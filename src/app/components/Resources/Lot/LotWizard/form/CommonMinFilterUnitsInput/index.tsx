import { FC, useMemo } from 'react';

import { useLotMultiplicatorValue } from '@app/hooks';

import { formatNumberProps } from '../formatNumberProps';
import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_MIN_FILTER_UNITS';

export const CommonMinFilterUnitsInput: FC<BaseInputProps> = () => {
  const { watch } = useInput(NAME);
  const type = watch('type');
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const { serializeValue, deserializeValue } = useLotMultiplicatorValue(type);

  return (
    <FormControlNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
      {...formatNumberProps()}
    />
  );
};
