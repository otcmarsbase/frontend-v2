export const BidRowFieldName = [
  'TYPE',
  'PUBLISH_DATE',
  'BID_FDV',
  'BID_SIZE',
  'OFFER_MAKER',
  'DIRECT_SELLER',
  'LOCATION',
  'DEADLINE',
] as const;
export type BidRowFieldName = (typeof BidRowFieldName)[number];

export const BidRowFieldNameTitleMap = new Map<BidRowFieldName, React.ReactNode>([
  ['TYPE', 'Type'],
  ['PUBLISH_DATE', 'Publish Date'],
  ['BID_FDV', 'Bid FDV'],
  ['BID_SIZE', 'Bid size'],
  ['OFFER_MAKER', 'Offer Maker'],
  ['DIRECT_SELLER', 'Is direct seller'],
  ['LOCATION', 'Location'],
  ['DEADLINE', 'Deadline'],
]);
