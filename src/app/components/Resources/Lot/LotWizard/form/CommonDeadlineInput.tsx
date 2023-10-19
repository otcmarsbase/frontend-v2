import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { Checkbox, VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormElement, DatePicker } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_DEADLINE_INPUT';

export const CommonDeadlineInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, setValue, trigger, watch } = useInput(NAME);
  const isPermanent = watch('COMMON_PERMANENT_INPUT');

  useEffect(() => {
    if (isPermanent) {
      setValue(null);
      trigger();
    }
  }, [isPermanent, setValue, trigger]);

  return (
    <FormElement label="Deadline" info="Expiration Date for this Lot" isRequired={isRequired} w="full">
      <VStack gap="1rem">
        <FormControl isInvalid={!isValid} isDisabled={isPermanent}>
          <Controller name={NAME} render={({ field }) => <DatePicker placeholder="Choose finish day" {...field} />} />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>

        <PermanentInput />
      </VStack>
    </FormElement>
  );
};

const PermanentInput = () => {
  return (
    <FormControl>
      <Controller
        name="COMMON_PERMANENT_INPUT"
        render={({ field }) => (
          <Checkbox isChecked={!!field.value} {...field}>
            Permanent
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
