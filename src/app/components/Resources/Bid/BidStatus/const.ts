import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import { Property } from 'csstype';

export const BidStatusInfoDictionary = createDictionary<
  Resource.Bid.Enums.BidStatus,
  { title: React.ReactNode; color: Property.Color }
>({
  ACTIVE: { title: 'Archived', color: 'green.50' },
  DEAL: { title: 'Deal', color: 'dark.50' },
  ON_MODERATION: { title: 'On moderation', color: '#F9C409' },
  REJECTED: {
    title: 'Rejected',
    color: 'red.500',
  },
});
