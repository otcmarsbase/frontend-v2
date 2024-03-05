import { useMemo } from 'react';

import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Decimal } from 'decimal.js';

export function useFormContext(lot: DeskGatewaySchema.Lot) {
  return useMemo(
    () => ({
      minSummary: lot.attributes.COMMON_MIN_FILTER_SUMMARY
        ? new Decimal(lot.attributes.COMMON_MIN_FILTER_SUMMARY).toNumber()
        : 5000,
      maxSummary: lot.attributes.COMMON_SUMMARY ? new Decimal(lot.attributes.COMMON_SUMMARY).toNumber() : null,
      priceRequired: ['UNLOCKED_TOKENS', 'EQUITY'].includes(lot.type),
    }),
    [lot],
  );
}
