import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export interface LotTypeDictionaryInfo {
  title: string;
}

export const LotTypeDictionary = createDictionary<DeskGatewaySchema.LotType, LotTypeDictionaryInfo>()
  .setFromRecord({
    SAFE: {
      title: 'SAFE',
    },
    SAFT: {
      title: 'SAFT',
    },
    TOKEN_WARRANT: {
      title: 'Token warrant',
    },
    EQUITY: {
      title: 'Equity',
    },
    UNLOCKED_TOKENS: {
      title: 'Unlocked tokens',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
