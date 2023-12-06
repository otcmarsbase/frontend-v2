import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, SimpleGridProps, Text } from '@chakra-ui/react';
import { FormControl, FormElement, FormErrorMessage, InputNumberProps, UIKit } from '@shared/ui-kit';

import { BaseInputProps, NumberInputDescriptor } from './types';
import { useInput } from './useInput';

export interface FormElementNumberInputProps
  extends BaseInputProps,
    NumberInputDescriptor,
    Omit<InputNumberProps, 'name'> {
  gridProps?: SimpleGridProps;
}

export const FormElementNumberInput: FC<FormElementNumberInputProps> = ({
  name,
  label,
  tooltip,
  placeholder,
  rightElementText,
  serializeValue = (value) => value,
  deserializeValue = (value) => value,
  onChange,
  gridProps,
  ...props
}) => {
  const { isRequired, isValid, error } = useInput(name);

  return (
    <FormElement label={label} info={tooltip} isRequired={isRequired} w="full" {...gridProps}>
      <FormControl isInvalid={!isValid}>
        <Controller
          name={name}
          render={({ field }) => (
            <InputGroup>
              <UIKit.InputNumber
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
    </FormElement>
  );
};
