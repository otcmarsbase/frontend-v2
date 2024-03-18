import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../utils';

export interface MediatorTypeDictionaryInfo {
  title: string;
}

export const MediatorTypeDictionary = createDictionary<DeskGatewaySchema.MediatorType, MediatorTypeDictionaryInfo>()
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
