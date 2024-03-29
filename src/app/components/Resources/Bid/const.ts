export const BidRowFieldName = [
  'TYPE',
  'PUBLISH_DATE',
  'BID_FDV',
  'BID_SIZE',
  'BID_AMOUNT',
  'OFFER_MAKER',
  'DIRECT_SELLER',
  'LOCATION',
  'DEADLINE',
] as const;
export type BidRowFieldName = (typeof BidRowFieldName)[number];

export const BidRowFieldNameTitleMap = new Map<BidRowFieldName, string>([
  ['TYPE', 'Lot Type'],
  ['PUBLISH_DATE', 'Publish Date'],
  ['BID_FDV', 'Target valuation'],
  ['BID_SIZE', 'Bid size'],
  ['BID_AMOUNT', 'Contract size'],
  ['OFFER_MAKER', 'Offer Maker'],
  ['LOCATION', 'Citizenship'],
]);
