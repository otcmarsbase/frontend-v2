import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FormControl, FormElement, FormErrorMessage, UIKit } from '@shared/ui-kit';

import { BaseInputProps, NumberInputDescriptor } from './types';
import { useInput } from './useInput';

export const FormElementNumberInput: FC<BaseInputProps & NumberInputDescriptor> = ({
  name,
  label,
  tooltip,
  placeholder,
  rightElementText,
}) => {
  const { isRequired, isValid, error } = useInput(name);

  return (
    <FormElement label={label} info={tooltip} isRequired={isRequired} w="full">
      <FormControl isInvalid={!isValid}>
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
    </FormElement>
  );
};
