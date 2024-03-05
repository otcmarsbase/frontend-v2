export const InvestorType = ['INDIVIDUAL', 'VC', 'HEDGE_FUND', 'FAMILY_OFFICE', 'DAO'] as const;
export type InvestorType = (typeof InvestorType)[number];
