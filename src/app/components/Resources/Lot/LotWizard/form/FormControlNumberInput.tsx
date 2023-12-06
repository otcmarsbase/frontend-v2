import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  SuggestionIcon,
  Tooltip,
  InputNumber,
  InputNumberProps,
} from '@shared/ui-kit';

import { BaseInputProps, NumberInputDescriptor } from './types';
import { useInput } from './useInput';

export const FormControlNumberInput: FC<BaseInputProps & NumberInputDescriptor & InputNumberProps> = ({
  name,
  label,
  tooltip,
  placeholder,
  rightElementText,
  serializeValue = (value) => value,
  deserializeValue = (value) => value,
  onChange,
  ...props
}) => {
  const { isRequired, isValid, error } = useInput(name);

  return (
    <FormControl isRequired={isRequired} isInvalid={!isValid}>
      {label && (
        <FormLabel display="flex" gap="0.25rem" alignItems="center">
          {label}
          <Tooltip label={tooltip}>
            <SuggestionIcon />
          </Tooltip>
        </FormLabel>
      )}
      <Controller
        name={name}
        render={({ field }) => (
          <InputGroup>
            <InputNumber
              {...field}
              onChange={(value, valueString) => {
                value = deserializeValue(value);
                field.onChange(value);
                onChange?.(value, valueString);
              }}
              value={serializeValue(field.value)}
              placeholder={placeholder}
              {...props}
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
