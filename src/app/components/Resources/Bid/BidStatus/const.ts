import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import { Property } from 'csstype';

export const BidStatusInfoDictionary = createDictionary<
  Resource.Bid.BidStatus,
  { title: React.ReactNode; color: Property.Color }
>({
  NEW: {
    title: 'New',
    color: 'dark.50',
  },
  ACTIVE: { title: 'Active', color: '#34A853' },
  ARCHIVED: { title: 'Archived', color: 'dark.50' },
  COMPLETED: { title: 'Completed', color: 'blue.30' },
  ON_MODERATE: { title: 'On moderation', color: '#F9C409' },
  REJECTED: {
    title: 'Rejected',
    color: 'red.500',
  },
});
