import { useMemo } from 'react';

import { Resource } from '@schema/desk-gateway';
import Decimal from 'decimal.js';

export function useDefaultValues(lot: Resource.Lot.Lot) {
  return useMemo(
    () => ({
      lotId: lot.id,
      fdv: lot.attributes.INVEST_DOC_FDV ? new Decimal(lot.attributes.INVEST_DOC_FDV).toNumber() : null,
      price: lot.attributes.COMMON_PRICE ? new Decimal(lot.attributes.COMMON_PRICE).toNumber() : null,
    }),
    [lot],
  );
}
