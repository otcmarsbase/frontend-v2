import { Resource } from '@schema/api-gateway';

export type RoundInfoModel = {
  round: Resource.Common.Enums.InvestRound;
  roundFDV: string;
  contractValue: string;

  totalEquityBought: number;
  pricePerEquity: string;
  description: string;
};
