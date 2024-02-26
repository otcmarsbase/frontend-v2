import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, InputNumber, SuggestionIcon, Tooltip } from '@shared/ui-kit';

import { formatNumberProps } from './formatNumberProps';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_FDV';

export const InvestDocFdvInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Target valuation
        <Tooltip label="The pricing ot the deal. It is the value of the round asset was acquired with the premium applied">
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
