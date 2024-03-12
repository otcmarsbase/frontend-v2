export const LotRowFieldName = [
  'LOT_TYPE',
  'DEAL_SIZE',
  'FDV',
  'PRICE_PER_TOKEN',
  'PRICE_PER_SHARE',
  'LOT_STATUS',
  'MIN_BID',
  'OFFER_MAKER',
] as const;
export type LotRowFieldName = (typeof LotRowFieldName)[number];

export const LotRowFieldNameTitleMap = new Map<LotRowFieldName, React.ReactNode>([
  ['LOT_TYPE', 'Asset type'],
  ['DEAL_SIZE', 'Deal size'],
  ['FDV', 'Target valuation'],
  ['PRICE_PER_TOKEN', 'Price per token'],
  ['PRICE_PER_SHARE', 'Price per share'],
  ['LOT_STATUS', 'Status'],
  ['OFFER_MAKER', 'Offer maker'],
  ['MIN_BID', 'Minimal bid'],
]);
