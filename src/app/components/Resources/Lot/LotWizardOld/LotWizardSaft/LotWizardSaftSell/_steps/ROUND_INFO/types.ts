import { Resource } from '@schema/desk-gateway';

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
