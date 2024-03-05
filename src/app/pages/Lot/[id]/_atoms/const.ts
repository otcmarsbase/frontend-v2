import { createDictionary } from '@app/dictionary';

export const BidListFieldType = ['AMOUNT', 'BID_FDV', 'BIDDER_TYPE', 'LOCATION', 'DEADLINE', 'STATUS'] as const;
export type BidListFieldType = (typeof BidListFieldType)[number];

export const LotInfoFieldType = [
  'COMMON_SUMMARY',
  'INVEST_DOC_FDV',
  'COMMON_MIN_FILTER_SUMMARY',
  'TOKEN_VESTING_PERIOD',
] as const;
export type LotInfoFieldType = (typeof LotInfoFieldType)[number];

export const LotInfoFieldDictionary = createDictionary<LotInfoFieldType, string>().setFromRecord({
  COMMON_SUMMARY: 'Size to offer',
  INVEST_DOC_FDV: 'Target valuation',
  COMMON_MIN_FILTER_SUMMARY: 'Minimal bid',
  TOKEN_VESTING_PERIOD: 'Vesting',
});

export const BidListFieldTypeTitleMap = new Map<BidListFieldType, React.ReactNode>([
  ['AMOUNT', 'Amount'],
  ['BID_FDV', 'Target valuation'],
  ['BIDDER_TYPE', 'Bidder type'],
  ['LOCATION', 'Citizenship'],
  ['DEADLINE', 'Deadline'],
  ['STATUS', 'Status'],
]);

export const LocationType = ['RUSSIA', 'OAE'] as const;
export type LocationType = (typeof LocationType)[number];
export const LocationTypeTitleMap = new Map<LocationType, React.ReactNode>([
  ['RUSSIA', 'Russia'],
  ['OAE', 'OAE'],
]);

export const MobileTabItemKey = ['LOT_INFO', 'BIDS', 'ASSET_INFO'] as const;

export type MobileTabItemKey = (typeof MobileTabItemKey)[number];

export const MobileTabItemDictionary = createDictionary<MobileTabItemKey, string>({
  LOT_INFO: 'Lot info',
  BIDS: 'Bids',
  ASSET_INFO: 'Asset info',
});
