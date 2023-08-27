import {
  NumberInput as ChakraNumberInput,
  NumberInputProps as ChakraNumberInputProps,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react';

import { useInputNumberDecimals, UseInputNumberDecimalsProps } from './hooks';

export interface InputNumberStringProps
  extends Omit<ChakraNumberInputProps, 'value' | 'onChange' | 'format'>,
    UseInputNumberDecimalsProps {}

export function InputNumberString({
  decimals,
  value,
  onChange,
  onBlur,
  onFocus,
  formatter,
  precision,

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
      <NumberInputField paddingStart={paddingStart} onKeyDown={onKeyDown} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
}
