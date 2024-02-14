import { useMemo } from 'react';

import { Resource } from '@schema/desk-gateway';

export function useDefaultValues(lot: Resource.Lot.Lot) {
  return useMemo(
    () => ({
      lotId: lot.id,
    }),
    [lot],
  );
}
