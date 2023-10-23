import { useCallback, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';
import Decimal from 'decimal.js';

export function useMultiplicatorValue(type: Resource.Lot.Enums.LotType) {
  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  const serializeValue = useCallback(
    (value: string) => {
      if (!value) return value;

      return new Decimal(value).mul(multiplicator).toString();
    },
    [multiplicator],
  );

  const deserializeValue = useCallback(
    (value: string) => {
      if (!value) return value;

      return new Decimal(value).div(multiplicator).toString();
    },
    [multiplicator],
  );

  return { serializeValue, deserializeValue };
}
