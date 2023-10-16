export const DelaRowFieldName = ['TYPE', 'CREATED_TIME', 'LOT_ID', 'DEAL_SIZE', 'DEAL_FVD', 'STATUS'] as const;
export type DelaRowFieldName = (typeof DelaRowFieldName)[number];

export const DealRowFieldNameTitleMap = new Map<DelaRowFieldName, React.ReactNode>([
  ['TYPE', 'Lot Type'],
  ['CREATED_TIME', 'Created time'],
  ['LOT_ID', 'Lot ID'],
  ['DEAL_SIZE', 'Deal size'],
  ['DEAL_FVD', 'Deal FVD'],
  ['STATUS', 'Status'],
]);
