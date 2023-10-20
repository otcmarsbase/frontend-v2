import { Resource } from '@schema/otc-desk-gateway';

export type RoundInfoModel = {
  round: Resource.Common.Enums.InvestRound;
  roundFDV: number;
  contractValue: number;
  totalEquityBought: number;
  pricePerEquity: number;
};
