import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, SuggestionIcon, Tooltip, UIKit } from '@shared/ui-kit';

import { InputDescriptor, NumberInputProps } from './types';
import { useInput } from './useInput';

export interface CommonPriceInputProps extends InputDescriptor, NumberInputProps {}

const NAME = 'COMMON_PRICE_INPUT';

export const CommonPriceInput: FC<CommonPriceInputProps> = ({ label, tooltip, placeholder, rightElementText }) => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isRequired={isRequired} isInvalid={!isValid}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {label}
        <Tooltip label={tooltip}>
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Controller
        name={NAME}
        render={(props) => (
          <InputGroup>
            <UIKit.InputNumber
              {...props.field}
              onChange={(value) => {
                props.field.onChange(value);
              }}
              placeholder={placeholder}
            />
            <InputRightElement>
              <Text color="orange.500" fontSize="sm">
                {rightElementText}
              </Text>
            </InputRightElement>
          </InputGroup>
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
