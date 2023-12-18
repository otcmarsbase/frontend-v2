import { createDictionary } from '@app/dictionary';

import { DashboardFilterStatus } from './types';

export const DashboardTabType = ['MY_LOTS', 'MY_BIDS', 'MY_DEALS'] as const;
export type DashboardTabType = (typeof DashboardTabType)[number];

export const DashboardTabTypeTitleMap = new Map<DashboardTabType, React.ReactNode>([
  ['MY_BIDS', 'My bids'],
  ['MY_DEALS', 'My deals'],
  ['MY_LOTS', 'My lots'],
]);

export const DashboardFilterStatusDictionary = createDictionary<DashboardFilterStatus, string>()
  .setFromEntries([
    ['active', 'Active'],
    ['moderated', 'Moderated'],
    ['ended', 'Ended'],
  ])
  .asReadonly();
