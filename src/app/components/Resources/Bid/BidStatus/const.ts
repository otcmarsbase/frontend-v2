import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';
import { Property } from 'csstype';

export const BidStatusInfoDictionary = createDictionary<
  Resource.Bid.Enums.BidStatus,
  { title: React.ReactNode; color: Property.Color }
>({
  ACTIVE: { title: 'Archived', color: 'green.50' },
  DEAL: { title: 'Archived', color: 'dark.50' },
  ON_MODERATION: { title: 'On moderation', color: '#F9C409' },
  REJECTED: {
    title: 'Rejected',
    color: 'red.500',
  },
});
