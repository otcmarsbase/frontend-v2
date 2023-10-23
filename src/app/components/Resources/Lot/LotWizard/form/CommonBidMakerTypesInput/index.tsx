import { FC, useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { UILogic } from '@app/components';
import { HStack, VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormElement } from '@shared/ui-kit';

import { FormControlCheckboxInput } from '../FormControlCheckboxInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_BID_MAKER_TYPES';

export const CommonBidMakerTypesInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, setValue, watch, trigger } = useInput(NAME);
  const [direction, isNoLimit] = watch(['COMMON_DIRECTION', 'COMMON_IS_NO_LIMIT']);

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  useEffect(() => {
    if (isNoLimit) {
      setValue([]);
      trigger();
    }
  }, [isNoLimit, setValue, trigger]);

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
                isInvalid={!isValid}
                onChange={field.onChange}
                placeholder={descriptor.placeholder}
                isDisabled={isNoLimit}
              />
            )}
          />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>

        <HStack w="full">
          <FormControlCheckboxInput name="COMMON_IS_NO_LIMIT" label="No limitations" />;
        </HStack>
      </VStack>
    </FormElement>
  );
};
