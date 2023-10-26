import { useMemo } from 'react';

import { Resource } from '@schema/desk-gateway';
import { Decimal } from 'decimal.js';

export function useRange(lot: Resource.Lot.Lot) {
  return useMemo(
    () => ({
      minUnits: lot.attributes.COMMON_MIN_FILTER_UNITS
        ? new Decimal(lot.attributes.COMMON_MIN_FILTER_UNITS).toNumber()
        : null,
      maxUnits: lot.attributes.COMMON_UNITS ? new Decimal(lot.attributes.COMMON_UNITS).toNumber() : null,
      minSummary: lot.attributes.COMMON_MIN_FILTER_SUMMARY
        ? new Decimal(lot.attributes.COMMON_MIN_FILTER_SUMMARY).toNumber()
        : null,
      maxSummary: lot.attributes.COMMON_SUMMARY ? new Decimal(lot.attributes.COMMON_SUMMARY).toNumber() : null,
    }),
    [lot],
  );
}
