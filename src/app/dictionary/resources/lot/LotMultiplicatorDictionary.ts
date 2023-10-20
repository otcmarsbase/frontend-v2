import { Resource } from '@schema/otc-desk-gateway';

import { createDictionary } from '../../utils';

export const LotMultiplicatorDictionary = createDictionary<Resource.Lot.Enums.LotType, { multiplicator: number }>()
  .setFromRecord({
    SAFE: {
      multiplicator: 100,
    },
    SAFT: {
      multiplicator: 1,
    },
    TOKEN_WARRANT: {
      multiplicator: 100,
    },
  })
  .asReadonly();
