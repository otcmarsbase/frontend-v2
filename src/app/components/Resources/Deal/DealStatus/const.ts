import { Resource } from '@schema/api-gateway';
import { Property } from 'csstype';

export const DealStatusTitleMap = new Map<Resource.Deal.Enums.DealStatus, React.ReactNode>([
  ['PREPARE', 'Prepare'],
  ['COMPLETED', 'Completed'],
  ['NEGOTIATION', 'Negotiation'],
  ['REJECTED', 'Rejected'],
]);

export const DealStatusColorMap = new Map<Resource.Deal.Enums.DealStatus, Property.Color>([
  ['PREPARE', 'dark.50'],
  ['COMPLETED', '#34A853'],
  ['NEGOTIATION', '#F9C409'],
  ['REJECTED', 'red.500'],
]);
