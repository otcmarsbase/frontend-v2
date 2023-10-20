import { Resource } from '@schema/otc-desk-gateway';

import { createDictionary } from '../utils';

export interface MediatorTypeDictionaryInfo {
  title: string;
}

export const MediatorTypeDictionary = createDictionary<Resource.Common.Enums.MediatorType, MediatorTypeDictionaryInfo>()
  .setFromRecord({
    DIRECT: {
      title: 'Direct',
    },
    OTC_AGENT: {
      title: 'OTC Agent',
    },
    MARKETPLACE: {
      title: 'Marketplace',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
