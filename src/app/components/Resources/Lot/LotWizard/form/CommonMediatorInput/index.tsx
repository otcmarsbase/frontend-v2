import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, Checkbox } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_MEDIATOR_INPUT';

export const CommonMediatorInput: FC<BaseInputProps> = () => {
  const { watch } = useInput(NAME);
  const direction = watch('COMMON_DIRECTION_INPUT');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  return (
    <FormControl>
      <Controller
        name={NAME}
        render={({ field }) => (
          <Checkbox
            isChecked={field.value === 'DIRECT'}
            onChange={(e) => {
              field.onChange(e.target.checked ? 'DIRECT' : 'OTC_AGENT');
            }}
          >
            {descriptor.label}
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
