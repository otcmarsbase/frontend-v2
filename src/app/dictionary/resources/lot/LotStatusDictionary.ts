import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export interface LotStatusDictionaryInfo {
  title: string;
  color: string;
}

export const LotStatusDictionary = createDictionary<DeskGatewaySchema.LotStatus, LotStatusDictionaryInfo>()
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
    ON_MODERATION: {
      title: 'On moderation',
      color: '#F9C409',
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
