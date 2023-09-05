import { Resource } from '@schema/api-gateway';
import { Property } from 'csstype';

export const BidStatusTitleMap = new Map<Resource.Bid.BidStatus, React.ReactNode>([
  ['NEW', 'New'],
  ['ON_MODERATE', 'On moderation'],
  ['ACTIVE', 'Active'],
  ['ACCEPTED', 'Accepted'],
  ['REJECTED', 'Rejected'],
  ['DEAL', 'Deal'],
  ['ARCHIVED', 'Archived'],
]);

export const BidStatusColorMap = new Map<Resource.Bid.BidStatus, Property.Color>([
  ['ACTIVE', '#34A853'],
  ['NEW', 'dark.50'],
  ['ACCEPTED', 'blue.50'],
  ['ARCHIVED', 'dark.50'],
  ['ON_MODERATE', '#F9C409'],
  ['DEAL', 'blue.30'],
  ['REJECTED', 'red.500'],
]);
