import { useCallback, useMemo } from 'react';

import Decimal from 'decimal.js';

import { useInputNumberHelpers } from './hooks';
import { InputNumberString, InputNumberStringProps } from './InputNumberString';

export interface InputNumberProps extends Omit<InputNumberStringProps, 'value' | 'onChange'> {
  value?: number | string;
  onChange?: (value: number, valueString: string) => void;
}

export function InputNumber({ value, onChange, ...props }: InputNumberProps) {
  const { isValidNumber, normalizeNumber } = useInputNumberHelpers();
  const valueString = useMemo(
    () => (isValidNumber(value) ? normalizeNumber(value) : null),
    [value, normalizeNumber, isValidNumber],
  );

  const onChangeString = useCallback(
    (value: string) => {
      if (!value) {
        return onChange?.(null, null);
      }

      if (isValidNumber(value)) {
        const valueNumber = new Decimal(normalizeNumber(value)).toNumber();
        if (onChange) {
          onChange(valueNumber, value);
        }
      }
    },
    [onChange, isValidNumber, normalizeNumber],
  );

  return <InputNumberString value={valueString} onChange={onChangeString} {...props} />;
}
