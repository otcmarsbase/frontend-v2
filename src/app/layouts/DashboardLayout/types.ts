export const DashboardFilterStatus = ['active', 'moderated', 'ended'] as const;
export type DashboardFilterStatus = (typeof DashboardFilterStatus)[number];

export interface DashboardFilters {
  status: DashboardFilterStatus[];
}
