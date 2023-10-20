export const LotRowFieldName = [
  'LOT_TYPE',
  'PUBLISHED_AT',
  'FDV',
  'LOT_VALUE',
  'VERTICAL',
  'DEADLINE',
  'TOTAL_BIDS_PLACE',
] as const;
export type LotRowFieldName = (typeof LotRowFieldName)[number];

export const LotRowFieldNameTitleMap = new Map<LotRowFieldName, React.ReactNode>([
  ['LOT_TYPE', 'Lot type'],
  ['PUBLISHED_AT', 'Published at'],
  ['FDV', 'FDV'],
  ['LOT_VALUE', 'Contract size'],
  ['VERTICAL', 'Vertical'],
  ['DEADLINE', 'Deadline'],
  ['TOTAL_BIDS_PLACE', 'Total bids place'],
]);
