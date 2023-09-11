import {
  NumberInput as ChakraNumberInput,
  NumberInputProps as ChakraNumberInputProps,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Input,
} from '@chakra-ui/react';

import { useInputNumberDecimals, UseInputNumberDecimalsProps } from './hooks';

export interface InputNumberStringProps
  extends Omit<ChakraNumberInputProps, 'value' | 'onChange' | 'format'>,
    UseInputNumberDecimalsProps {
  showStepper?: boolean;
}

export function InputNumberString({
  decimals,
  value,
  onChange,
  onBlur,
  onFocus,
  formatter,
  precision,
  showStepper = false,
  paddingStart,
  onKeyDown,
  ...props
}: InputNumberStringProps) {
  const {
    value: inputValue,
    handleOnBlur,
    handleOnChange,
    handleOnFocus,
  } = useInputNumberDecimals({ decimals, value, onChange, formatter, precision });

  return (
    <ChakraNumberInput
      width="full"
      precision={precision}
      value={inputValue}
      onBlur={handleOnBlur(onBlur)}
      onFocus={handleOnFocus(onBlur)}
      onChange={handleOnChange}
      {...props}
    >
      <NumberInputField placeholder={props.placeholder} paddingStart={paddingStart} onKeyDown={onKeyDown} />
      {showStepper && (
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      )}
    </ChakraNumberInput>
  );
}
