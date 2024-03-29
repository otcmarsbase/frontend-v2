import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export interface DealStatusDictionaryInfo {
  title: string;
}

export const DealStatusDictionary = createDictionary<DeskGatewaySchema.DealStatus, DealStatusDictionaryInfo>()
  .setFromRecord({
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
