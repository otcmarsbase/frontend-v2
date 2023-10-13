import { Resource } from '@schema/otc-desk-gateway';

export type RoundInfoModel = {
  round: Resource.Common.Enums.InvestRound;
  roundFDV: string;
  contractValue: string;
  totalEquityBought: number;
  pricePerEquity: string;
};
