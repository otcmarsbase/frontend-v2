import { useState, useMemo, useEffect, useCallback } from 'react';

import { useInputNumberHelpers } from './useInputNumberHelpers';

export interface UseInputNumberCoreProps {
  value?: string;
  onChange?: (value: string) => void;

  formatter?: (value: string) => string;
  precision?: number;
}

export function useInputNumberCore({ value, onChange, formatter, precision }: UseInputNumberCoreProps) {
  const { isValidNumber, normalizeNumber } = useInputNumberHelpers();

  const [valueString, setValueString] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const valueFormatted = useMemo(
    () => (isFocused || !formatter ? valueString : formatter(valueString)),
    [formatter, isFocused, valueString],
  );

  useEffect(() => {
    if (typeof value === 'undefined' || value === null || value === '') {
      if (!(valueString === '-' || valueString === '.')) {
        setValueString('');
      }
    } else {
      const isValid = isValidNumber(value);

      if (isValid && normalizeNumber(value) !== normalizeNumber(valueString)) {
        setValueString(normalizeNumber(value, precision));
      }
    }
  }, [value, valueString, precision, isValidNumber, normalizeNumber]);

  const handleOnChange = useCallback(
    (valueString: string) => {
      if (
        typeof valueString === 'undefined' ||
        valueString === null ||
        valueString === '' ||
        valueString === '-' ||
        valueString === '.'
      ) {
        setValueString(valueString);
        onChange(null);
      } else {
        const isValid = isValidNumber(valueString);

        if (isValid) {
          setValueString(valueString);
          onChange(normalizeNumber(valueString));
        }
      }
    },
    [onChange, normalizeNumber, isValidNumber],
  );

  const handleOnFocus = useCallback(<T>(onFocus: (event?: T) => any) => {
    return (event?: T) => {
      setIsFocused(true);
      onFocus?.(event);
    };
  }, []);

  const handleOnBlur = useCallback(<T>(onBlur: (event?: T) => any) => {
    return (event?: T) => {
      setIsFocused(false);
      onBlur?.(event);
    };
  }, []);

  return {
    value: valueFormatted,
    handleOnChange,
    handleOnFocus,
    handleOnBlur,
    isValidNumber,
    normalizeNumber,
  };
}
