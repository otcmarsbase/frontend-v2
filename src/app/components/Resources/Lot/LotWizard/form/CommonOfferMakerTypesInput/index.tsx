import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { ParticipantTypeSelect } from '@app/components';
import { HStack, VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormElement } from '@shared/ui-kit';

import { CommonMediatorInput } from '../CommonMediatorInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_OFFER_MAKER_TYPES_INPUT';

export const CommonOfferMakerTypesInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, watch } = useInput(NAME);
  const direction = watch('COMMON_DIRECTION_INPUT');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  return (
    <FormElement label={descriptor.label} info={descriptor.tooltip} isRequired={isRequired} w="full">
      <VStack gap="1rem">
        <FormControl isInvalid={!isValid}>
          <Controller
            name={NAME}
            render={({ field }) => (
              <ParticipantTypeSelect
                {...field}
                isMulti
                onChange={field.onChange}
                placeholder={descriptor.placeholder}
              />
            )}
          />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>

        <HStack w="full">
          <CommonMediatorInput />
        </HStack>
      </VStack>
    </FormElement>
  );
};
