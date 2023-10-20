import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormElement, DatePicker } from '@shared/ui-kit';

import { FormControlCheckboxInput } from './FormControlCheckboxInput';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_DEADLINE';

export const CommonDeadlineInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, setValue, trigger, watch, value, rhfSetValue } = useInput(NAME);
  const isPermanent = watch('COMMON_IS_PERMANENT');

  useEffect(() => {
    if (isPermanent) {
      setValue(null);
      trigger();
    }
  }, [isPermanent, setValue, trigger]);

  useEffect(() => {
    if (!value) rhfSetValue('COMMON_IS_PERMANENT', true);
  }, [value, rhfSetValue]);

  return (
    <FormElement label="Deadline" info="Expiration Date for this Lot" isRequired={isRequired} w="full">
      <VStack gap="1rem">
        <FormControl isInvalid={!isValid} isDisabled={isPermanent}>
          <Controller
            name={NAME}
            render={({ field }) => <DatePicker placeholder="Choose finish day" {...field} minDate={new Date()} />}
          />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>

        <FormControlCheckboxInput name="COMMON_IS_PERMANENT" label="Permanent" />
      </VStack>
    </FormElement>
  );
};
