export const DashboardTabType = ['MY_LOTS', 'MY_BIDS', 'MY_DEALS'] as const;
export type DashboardTabType = (typeof DashboardTabType)[number];

export const DashboardTabTypeTitleMap = new Map<DashboardTabType, React.ReactNode>([
  ['MY_BIDS', 'My bids'],
  ['MY_DEALS', 'My deals'],
  ['MY_LOTS', 'My lots'],
]);
