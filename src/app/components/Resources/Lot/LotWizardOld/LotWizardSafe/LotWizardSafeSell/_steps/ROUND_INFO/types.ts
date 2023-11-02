import { Resource } from '@schema/desk-gateway';

export type RoundInfoModel = {
  round: Resource.Common.Enums.InvestRound;
  roundFDV: number;
  contractValue: number;
  totalEquityBought: number;
  pricePerEquity: number;
};
