import { useMemo, useCallback } from 'react';

import Decimal from 'decimal.js';

import { UseInputNumberCoreProps, useInputNumberCore } from './useInputNumberCore';
import { useInputNumberHelpers } from './useInputNumberHelpers';

export interface UseInputNumberDecimalsProps extends UseInputNumberCoreProps {
  decimals?: number;
}

export function useInputNumberDecimals({ decimals = 0, value, onChange, ...props }: UseInputNumberDecimalsProps) {
  const { isValidNumber } = useInputNumberHelpers();

  const _value = useMemo(
    () => (isValidNumber(value) ? new Decimal(value).mul(new Decimal(10).pow(decimals)).toString() : value),
    [isValidNumber, value, decimals],
  );
  const _onChange = useCallback(
    (value) =>
      onChange?.(isValidNumber(value) ? new Decimal(value).div(new Decimal(10).pow(decimals)).toString() : value),
    [onChange, decimals, isValidNumber],
  );

  const {
    value: valueDecimals,
    handleOnChange,
    ...core
  } = useInputNumberCore({ ...props, value: _value, onChange: _onChange });

  return { value: valueDecimals, handleOnChange, isValidNumber, decimals, ...core };
}
