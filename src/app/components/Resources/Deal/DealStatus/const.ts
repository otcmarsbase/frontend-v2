import { Resource } from '@schema/desk-gateway';
import { Property } from 'csstype';

export const DealStatusTitleMap = new Map<Resource.Deal.Enums.DealStatus, React.ReactNode>([
  ['COMPLETED', 'Completed'],
  ['NEGOTIATION', 'Negotiation'],
  ['REJECTED', 'Rejected'],
]);

export const DealStatusColorMap = new Map<Resource.Deal.Enums.DealStatus, Property.Color>([
  ['COMPLETED', '#34A853'],
  ['NEGOTIATION', '#F9C409'],
  ['REJECTED', 'red.500'],
]);
