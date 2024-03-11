import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, InputNumber, SuggestionIcon, Tooltip } from '@shared/ui-kit';

import { formatNumberProps } from './formatNumberProps';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_MIN_FILTER_SUMMARY';

export const CommonMinFilterSummaryInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Minimal bid
        <Tooltip label="Contract size for one deal">
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Controller
        name={NAME}
        render={({ field }) => (
          <InputGroup>
            <InputNumber placeholder="Amount" {...field} {...formatNumberProps()} />
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
  );
};
