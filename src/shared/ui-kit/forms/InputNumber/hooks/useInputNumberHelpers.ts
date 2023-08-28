import { useCallback } from 'react';

import Decimal from 'decimal.js';

export function useInputNumberHelpers() {
  const isValidNumber = useCallback((value: string | number): boolean => {
    try {
      const decimal = new Decimal(value);
      return !decimal.isNaN();
    } catch (err) {
      return false;
    }
  }, []);

  const normalizeNumber = useCallback(
    (value: string | number, precision?: number) => {
      const isValid = isValidNumber(value);
      if (isValid) {
        let decimal = new Decimal(value);
        if (typeof precision === 'number') return decimal.toFixed(precision);
        return decimal.toString();
      }
      return null;
    },
    [isValidNumber],
  );

  return {
    isValidNumber,
    normalizeNumber,
  };
}
