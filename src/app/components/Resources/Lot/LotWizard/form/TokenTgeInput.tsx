import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { VStack, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormElement, DatePicker } from '@shared/ui-kit';

import { FormControlCheckboxInput } from './FormControlCheckboxInput';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'TOKEN_TGE';

export const TokenTgeInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, watch, setValue, trigger, rhfSetValue, value } = useInput(NAME);

  const isTBD = watch('TOKEN_TGE_IS_TBD');

  useEffect(() => {
    if (isTBD) {
      setValue('TBD');
      trigger();
    }
  }, [isTBD, setValue, trigger]);

  useEffect(() => {
    if (value === 'TBD') {
      rhfSetValue('TOKEN_TGE_IS_TBD', true);
    }
  }, [value, rhfSetValue]);

  return (
    <FormElement
      label="Dates"
      info="TGE (Token Generation Event). Date whena cryptocurrency or blockchain project generates and distributes its tokens to initial investors, contributors, or participants."
      isRequired={isRequired}
      w="full"
    >
      <VStack gap="1.5rem" bg="dark.800" padding="1.5rem" rounded="xl">
        <FormControl isDisabled={isTBD} isInvalid={!isValid}>
          <Controller
            name={NAME}
            render={({ field }) => (
              <DatePicker
                placeholder="Estimated TGE Date"
                {...field}
                value={field.value === 'TBD' ? null : field.value}
              />
            )}
          />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>

        <FormControlCheckboxInput
          name="TOKEN_TGE_IS_TBD"
          label="TBD"
          tooltip="It indicates that the date for the distribution of tokens is still unknown."
        />
      </VStack>
    </FormElement>
  );
};
