import { Resource } from '@schema/api-gateway';

import { createDictionary } from '../../utils';

export interface LotTypeDictionaryInfo {
  title: string;
}

export const LotTypeDictionary = createDictionary<Resource.Lot.LotType, LotTypeDictionaryInfo>()
  .setFromRecord({
    SAFE: {
      title: 'SAFE',
    },
    SAFE_TOKEN_WARRANT: {
      title: 'SAFE + Token warrant',
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
