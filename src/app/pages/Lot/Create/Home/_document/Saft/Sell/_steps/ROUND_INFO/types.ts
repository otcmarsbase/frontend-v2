import { Resource } from '@schema/otc-desk-gateway';

export type RoundInfoModel = {
  round: Resource.Common.Enums.InvestRound;
  roundFDV: string;
  contractValue: string;
  estimateTGEDate: Date;
  isTBD: boolean;
  lockupPeriod: string;
  alreadyOver: boolean;
  vestingCalendar: string;
  totalEquityBought: number;
  pricePerEquity: string;
};
