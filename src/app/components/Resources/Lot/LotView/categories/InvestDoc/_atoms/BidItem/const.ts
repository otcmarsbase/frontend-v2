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
