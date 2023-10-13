import { Resource } from '@schema/otc-desk-gateway';

import { createDictionary } from '../../utils';

export interface LotTypeDictionaryInfo {
  title: string;
}

export const LotTypeDictionary = createDictionary<Resource.Lot.Enums.LotType, LotTypeDictionaryInfo>()
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
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
