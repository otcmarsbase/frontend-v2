export const LotRowFieldName = [
  'LOT_TYPE',
  'PUBLISHED_AT',
  'FDV',
  'LOT_VALUE',
  'VERTICAL',
  'FINISHED_AT',
  'TOTAL_BIDS_PLACE',
] as const;
export type LotRowFieldName = (typeof LotRowFieldName)[number];

export const LotRowFieldNameTitleMap = new Map<LotRowFieldName, React.ReactNode>([
  ['LOT_TYPE', 'Lot type'],
  ['PUBLISHED_AT', 'Published at'],
  ['FDV', 'FDV'],
  ['LOT_VALUE', 'Lot value'],
  ['VERTICAL', 'Vertical'],
  ['FINISHED_AT', 'Finished at'],
  ['TOTAL_BIDS_PLACE', 'Total bids place'],
]);
