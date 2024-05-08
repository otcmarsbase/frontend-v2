import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, InputNumber } from '@shared/ui-kit';

import { formatNumberProps } from '../../formatNumberProps';
import { BaseInputProps } from '../../types';
import { useInput } from '../../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'BOOSTER_INFO_PREVIOUS_ROUND_PRICE';

export const BoosterInfoPreviousRoundPriceInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, watch } = useInput(NAME);

  const direction = watch('COMMON_DIRECTION');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
      </FormLabel>
      <Controller
        name={NAME}
        render={({ field }) => (
          <InputGroup>
            <InputNumber {...field} {...formatNumberProps()} placeholder={descriptor.placeholder} />
            <InputRightElement>
              <Text color="orange.500" fontSize="sm">
                $
              </Text>
            </InputRightElement>
          </InputGroup>
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
