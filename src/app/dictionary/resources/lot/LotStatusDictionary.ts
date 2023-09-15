import { Resource } from '@schema/api-gateway';

import { createDictionary } from '../../utils';

export interface LotStatusDictionaryInfo {
  title: string;
  color: string;
}

export const LotStatusDictionary = createDictionary<Resource.Lot.LotStatus, LotStatusDictionaryInfo>()
  .setFromRecord({
    COMPLETED: {
      title: 'Completed',
      color: 'blue.50',
    },
    REJECTED: {
      title: 'Rejected',
      color: 'red.500',
    },
    DRAFT: {
      title: 'Draft',
      color: 'dark.50',
    },
    ACTIVE: {
      title: 'Active',
      color: '#34A853',
    },
    ON_MODERATE: {
      title: 'On moderation',
      color: '#F9C409',
    },
    PARTIALLY_COMPLETED: {
      title: 'Partially completed',
      color: 'blue.30',
    },
    UNPUBLISHED: {
      title: 'Unpublished',
      color: 'dark.50',
    },
    ARCHIVED: {
      title: 'Archived',
      color: 'dark.50',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    color: 'dark.50',
  }))
  .asReadonly();
