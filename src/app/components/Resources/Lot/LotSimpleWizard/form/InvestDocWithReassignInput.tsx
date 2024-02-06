import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormLabel, FormErrorMessage, Checkbox, Flex } from '@chakra-ui/react';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_WITH_REASSIGN';

export const InvestDocWithReassignInput: FC<BaseInputProps> = (props) => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Available reassignment
      </FormLabel>
      <Flex justifyContent="space-between">
        <Controller
          name={NAME}
          render={({ field }) => (
            <Checkbox
              isChecked={field.value === true}
              {...field}
              flexGrow="1"
              onChange={(e) => e.target.checked && field.onChange(true)}
              required={false}
            >
              Yes
            </Checkbox>
          )}
        />
        <Controller
          name={NAME}
          render={({ field }) => (
            <Checkbox
              isChecked={field.value === false}
              {...field}
              flexGrow="1"
              onChange={(e) => e.target.checked && field.onChange(false)}
              required={false}
            >
              No
            </Checkbox>
          )}
        />
      </Flex>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
