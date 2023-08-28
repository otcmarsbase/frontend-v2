import { Resource } from '@schema/api-gateway';
import { Property } from 'csstype';

export const LotStatusTitleMap = new Map<Resource.Lot.LotStatus, React.ReactNode>([
  ['ACTIVE', 'Active'],
  ['ARCHIVED', 'Archived'],
  ['COMPLETED', 'Completed'],
  ['DRAFT', 'Draft'],
  ['ON_MODERATE', 'On moderation'],
  ['PARTIALLY_COMPLETED', 'Completed'],
  ['REJECTED', 'Rejected'],
  ['UNPUBLISHED', 'Unpublished'],
]);

export const LotStatusColorMap = new Map<Resource.Lot.LotStatus, Property.Color>([
  ['ACTIVE', '#34A853'],
  ['ARCHIVED', 'dark.50'],
  ['COMPLETED', 'blue.50'],
  ['DRAFT', 'dat.50'],
  ['ON_MODERATE', '#F9C409'],
  ['PARTIALLY_COMPLETED', 'blue.30'],
  ['REJECTED', 'red.500'],
  ['UNPUBLISHED', 'dar.50'],
]);
