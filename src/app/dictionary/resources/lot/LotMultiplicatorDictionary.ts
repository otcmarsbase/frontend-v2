import { Resource } from '@schema/desk-gateway';

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
    EQUITY: {
      multiplicator: 100,
    },
    UNLOCKED_TOKENS: {
      multiplicator: 1,
    },
  })
  .asReadonly();
