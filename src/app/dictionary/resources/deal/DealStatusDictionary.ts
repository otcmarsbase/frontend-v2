import { Resource } from '@schema/api-gateway';

import { createDictionary } from '../../utils';

export interface DealStatusDictionaryInfo {
  title: string;
}

export const DealStatusDictionary = createDictionary<Resource.Deal.Enums.DealStatus, DealStatusDictionaryInfo>()
  .setFromRecord({
    PREPARE: {
      title: 'Prepare',
    },
    NEGOTIATION: {
      title: 'Negotiation',
    },
    COMPLETED: {
      title: 'Completed',
    },
    REJECTED: {
      title: 'Rejected',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
