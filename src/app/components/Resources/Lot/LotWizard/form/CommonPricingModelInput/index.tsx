import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { RadioButtons } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_PRICING_MODEL_INPUT';

export const CommonPricingModelInput: FC<BaseInputProps> = () => {
  const { watch } = useInput(NAME);
  const type = watch('type');

  return (
    <Controller
      name={NAME}
      render={({ field }) => (
        <RadioButtons
          variant="outline"
          value={field.value}
          renderKey={(item) => item}
          onChange={field.onChange}
          renderItem={(item) => DescriptorDictionary.get(item).get(type)}
          items={DescriptorDictionary.keys()}
        />
      )}
    />
  );
};
