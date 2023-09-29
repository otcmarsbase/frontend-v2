export const DelaRowFieldName = [
  'TYPE',
  'PUBLISH_DATE',
  'BID_FVD',
  'BID_SIZE',
  'OFFER_MAKER',
  'DIRECT_SELLER',
  'LOCATION',
] as const;
export type DelaRowFieldName = (typeof DelaRowFieldName)[number];

export const DealRowFieldNameTitleMap = new Map<DelaRowFieldName, React.ReactNode>([
  ['TYPE', 'Type'],
  ['PUBLISH_DATE', 'Publish Date'],
  ['BID_FVD', 'Bid FVD'],
  ['BID_SIZE', 'Bid size'],
  ['OFFER_MAKER', 'Offer Maker'],
  ['DIRECT_SELLER', 'Is direct seller'],
]);
