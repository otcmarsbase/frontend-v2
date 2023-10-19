import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, SuggestionIcon, Tooltip, UIKit } from '@shared/ui-kit';

import { BaseInputProps, NumberInputDescriptor } from './types';
import { useInput } from './useInput';

export const FormControlNumberInput: FC<BaseInputProps & NumberInputDescriptor> = ({
  name,
  label,
  tooltip,
  placeholder,
  rightElementText,
}) => {
  const { isRequired, isValid, error } = useInput(name);

  return (
    <FormControl isRequired={isRequired} isInvalid={!isValid}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {label}
        <Tooltip label={tooltip}>
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Controller
        name={name}
        render={(props) => (
          <InputGroup>
            <UIKit.InputNumber
              {...props.field}
              onChange={(value) => {
                props.field.onChange(value);
              }}
              placeholder={placeholder}
            />
            {rightElementText && (
              <InputRightElement>
                <Text color="orange.500" fontSize="sm">
                  {rightElementText}
                </Text>
              </InputRightElement>
            )}
          </InputGroup>
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
