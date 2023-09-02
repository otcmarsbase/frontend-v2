import { Resource } from '@schema/api-gateway';

export const MainChipFieldType = [
  'PRICE_PER_EQUITY',
  'LOT_FDV',
  'MIN_BID',
  'CONTRACT_SIZE',
  'OWNER',
  'SELLER',
  'TYPE_OF_BIDDER',
  'TYPE_OF_SELLER',
] as const;
export type MainChipFieldType = (typeof MainChipFieldType)[number];

export const MainChipFieldTypeTitleMap = new Map<MainChipFieldType, React.ReactNode>([
  ['PRICE_PER_EQUITY', 'Price 0.01% equity'],
  ['LOT_FDV', 'Lot FDV'],
  ['CONTRACT_SIZE', 'Contract size'],
  ['OWNER', 'Owner'],
  ['SELLER', 'Seller'],
  ['MIN_BID', 'Min Bid'],
  ['TYPE_OF_BIDDER', 'Type of bidder'],
  ['TYPE_OF_SELLER', 'Type of seller'],
]);

export const BidListFieldType = ['AMOUNT', 'BID_SIZE', 'BIDDER_TYPE', 'LOCATION', 'DEADLINE', 'STATUS'] as const;
export type BidListFieldType = (typeof BidListFieldType)[number];

export const BidListFieldTypeTitleMap = new Map<BidListFieldType, React.ReactNode>([
  ['AMOUNT', 'Amount'],
  ['BID_SIZE', 'Bid Size'],
  ['BIDDER_TYPE', 'Bidder type'],
  ['LOCATION', 'Location'],
  ['DEADLINE', 'Deadline'],
  ['STATUS', 'Status'],
]);

export const LocationType = ['RUSSIA', 'OAE'] as const;
export type LocationType = (typeof LocationType)[number];
export const LocationTypeTitleMap = new Map<LocationType, React.ReactNode>([
  ['RUSSIA', 'Russia'],
  ['OAE', 'OAE'],
]);

export const ParticipantType = ['INDIVIDUAL', 'VC', 'HEDGE_FUND', 'FAMILY_OFFICE', 'DAO', 'NO_LIMIT'] as const;
export type ParticipantType = (typeof ParticipantType)[number];
export const ParticipantTypeTitleMap = new Map<ParticipantType, React.ReactNode>([
  ['INDIVIDUAL', 'Individual'],
  ['VC', 'VC'],
  ['HEDGE_FUND', 'Hedge fund'],
  ['FAMILY_OFFICE', 'Family Office'],
  ['DAO', 'DAO'],
  ['NO_LIMIT', 'No limit'],
]);
