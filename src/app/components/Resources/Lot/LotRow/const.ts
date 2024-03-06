export const LotRowFieldName = ['LOT_TYPE', 'FDV', 'LOT_STATUS', 'MIN_BID', 'OFFER_MAKER'] as const;
export type LotRowFieldName = (typeof LotRowFieldName)[number];

export const LotRowFieldNameTitleMap = new Map<LotRowFieldName, React.ReactNode>([
  ['LOT_TYPE', 'Asset type'],
  ['FDV', 'Deal size'],
  ['LOT_STATUS', 'Status'],
  ['OFFER_MAKER', 'Offer maker'],
  ['MIN_BID', 'Minimal bid'],
]);
