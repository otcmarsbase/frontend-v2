import { useMemo } from 'react';

import { DeskGatewaySchema } from '@schema/desk-gateway';

export function useDefaultValues(lot: DeskGatewaySchema.Lot) {
  return useMemo(
    () => ({
      lotId: lot.id,
    }),
    [lot],
  );
}
