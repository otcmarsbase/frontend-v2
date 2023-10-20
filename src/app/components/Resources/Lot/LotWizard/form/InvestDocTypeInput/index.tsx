import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { LotTypeDictionary } from '@app/dictionary';
import { HStack, VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, RadioButtons, FormElement } from '@shared/ui-kit';

import { InvestDocWithReassignInput } from '../InvestDocWithReassignInput';
import { SafeWithTokenWarrantInput } from '../SafeWithTokenWarrantInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'type';

export const InvestDocTypeInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, value } = useInput(NAME);

  const descriptor = useMemo(() => DescriptorDictionary.get(value), [value]);

  return (
    <FormElement label={descriptor.label} info={descriptor.tooltip} isRequired={isRequired}>
      <VStack alignItems="start" gap="1rem">
        <FormControl isInvalid={!isValid}>
          <Controller
            name={NAME}
            render={({ field }) => (
              <RadioButtons
                variant="outline"
                value={field.value}
                renderKey={(item) => item}
                onChange={field.onChange}
                renderItem={(item) => LotTypeDictionary.get(item).title}
                items={LotTypeDictionary.keys()}
                isInvalid={!isValid}
              />
            )}
          />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
        <HStack w="full" gap="1rem">
          <InvestDocWithReassignInput />
          {value === 'SAFE' && <SafeWithTokenWarrantInput />}
        </HStack>
      </VStack>
    </FormElement>
  );
};
