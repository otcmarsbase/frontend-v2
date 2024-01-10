import { createDictionary } from '@app/dictionary';

export const MainChipFieldType = [
  'PRICE_TOKEN',
  'PRICE_EQUITY',
  'PRICE_UNIT',
  'LOT_FDV',
  'MIN_BID',
  'CONTRACT_SIZE',
  'OWNER',
  'SELLER',
  'BUYER',
  'TYPE_OF_BIDDER',
  'TYPE_OF_SELLER',
] as const;
export type MainChipFieldType = (typeof MainChipFieldType)[number];

export const MainChipFieldTypeTitleMap = new Map<MainChipFieldType, string>([
  ['PRICE_TOKEN', 'Price 0.01% token share'],
  ['PRICE_EQUITY', 'Price 0.01% equity'],
  ['PRICE_UNIT', 'Price per token'],
  ['LOT_FDV', 'Lot FDV'],
  ['CONTRACT_SIZE', 'Contract size'],
  ['OWNER', 'Owner'],
  ['SELLER', 'Seller'],
  ['BUYER', 'Buyer'],
  ['MIN_BID', 'Min Bid'],
  ['TYPE_OF_BIDDER', 'Type of bidder'],
  ['TYPE_OF_SELLER', 'Offer maker'],
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

export const SortBidsByType = ['BID_FDV', 'BID_SIZE', 'DEADLINE', 'STATUS'] as const;
export type SortBidsByType = (typeof SortBidsByType)[number];

export type SortBidsByTypeDictionaryInfo = {
  title: string;
};

export const SortBidsByTypeDictionary = createDictionary<SortBidsByType, SortBidsByTypeDictionaryInfo>().setFromRecord({
  BID_FDV: {
    title: 'Bid FDV',
  },
  BID_SIZE: {
    title: 'Bid size',
  },
  DEADLINE: {
    title: 'Deadline',
  },
  STATUS: {
    title: 'Status',
  },
});

export const RoundInfoFieldType = [
  'INVESTMENT_ROUND',
  'ROUND_TOKEN_PRICE',
  'ROUND_EQUITY_PRICE',
  'ROUND_UNITS',
  'TGE_DATE',
  'ROUND_FDV',
  'LOCKUP_PERIOD',
  'VESTING_CALENDAR',
] as const;
export type RoundInfoFieldType = (typeof RoundInfoFieldType)[number];

export const RoundInfoFieldDictionary = createDictionary<RoundInfoFieldType, { title: string }>()
  .setFromRecord({
    INVESTMENT_ROUND: {
      title: 'Investment round',
    },
    ROUND_TOKEN_PRICE: {
      title: 'Round token price',
    },
    ROUND_EQUITY_PRICE: {
      title: 'Equity price',
    },
    ROUND_UNITS: {
      title: 'Tokens share bought',
    },
    TGE_DATE: {
      title: 'Estimate TGE Date',
    },
    ROUND_FDV: {
      title: 'Round FDV',
    },
    LOCKUP_PERIOD: {
      title: 'Lockup period',
    },
    VESTING_CALENDAR: {
      title: 'Vesting calendar',
    },
  })
  .asReadonly();

export const MobileTabItemKey = ['BIDS', 'LOT_INFO', 'ASSET_INFO'] as const;

export type MobileTabItemKey = (typeof MobileTabItemKey)[number];

export const MobileTabItemDictionary = createDictionary<MobileTabItemKey, string>({
  BIDS: 'Bids',
  LOT_INFO: 'Lot info',
  ASSET_INFO: 'Asset info',
});
