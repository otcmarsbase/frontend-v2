import { FC, useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { UILogic } from '@app/components';
import { Checkbox, HStack, VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormElement } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_BID_MAKER_TYPES_INPUT';

export const CommonBidMakerTypesInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, setValue, watch } = useInput(NAME);
  const [direction, noLimit] = watch(['COMMON_DIRECTION_INPUT', 'COMMON_NO_LIMIT_INPUT']);

  const { trigger } = useFormContext();

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  useEffect(() => {
    if (noLimit) {
      setValue([]);
      trigger(NAME);
    }
  }, [noLimit, setValue, trigger]);

  return (
    <FormElement label={descriptor.label} info={descriptor.tooltip} isRequired={isRequired} w="full">
      <VStack gap="1rem">
        <FormControl isInvalid={!isValid}>
          <Controller
            name={NAME}
            render={({ field }) => (
              <UILogic.ParticipantTypeSelect
                {...field}
                isMulti
                onChange={field.onChange}
                placeholder={descriptor.placeholder}
                isDisabled={noLimit}
              />
            )}
          />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>

        <HStack w="full">
          <NoLimitInput />
        </HStack>
      </VStack>
    </FormElement>
  );
};

const NoLimitInput = () => {
  return (
    <FormControl>
      <Controller
        name="COMMON_NO_LIMIT_INPUT"
        render={({ field }) => (
          <Checkbox isChecked={!!field.value} {...field}>
            No limitations
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
