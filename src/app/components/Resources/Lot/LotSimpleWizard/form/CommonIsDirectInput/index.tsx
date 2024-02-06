import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { RadioButtons } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary, BuyChoicesDictionary, SellChoicesDictionary } from './const';

const NAME = 'COMMON_IS_DIRECT';

export const CommonIsDirectInput: FC<BaseInputProps> = () => {
  const { watch, isRequired, isValid, error } = useInput(NAME);
  const direction = watch('COMMON_DIRECTION');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  const choicesDictionary = useMemo(
    () => (direction === 'BUY' ? BuyChoicesDictionary : SellChoicesDictionary),
    [direction],
  );

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
      </FormLabel>
      <Controller
        name={NAME}
        render={({ field }) => (
          <RadioButtons
            variant="outline"
            value={field.value}
            renderKey={(item) => item}
            onChange={field.onChange}
            renderItem={(item) => choicesDictionary.get(item)}
            items={choicesDictionary.keys()}
            isInvalid={!isValid}
          />
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
