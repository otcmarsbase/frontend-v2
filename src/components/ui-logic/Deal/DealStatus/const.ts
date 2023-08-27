import { Resource } from '@schema/api-gateway';
import { Property } from 'csstype';

export const DealStatusTitleMap = new Map<Resource.Deal.DealStatus, React.ReactNode>([
  ['COMPLETED', 'Completed'],
  ['NEGOTIATION', 'Negotiation'],
  ['REJECTED', 'Rejected'],
]);

export const DealStatusColorMap = new Map<Resource.Deal.DealStatus, Property.Color>([
  ['COMPLETED', '#34A853'],
  ['NEGOTIATION', '#F9C409'],
  ['REJECTED', 'red.500'],
]);
