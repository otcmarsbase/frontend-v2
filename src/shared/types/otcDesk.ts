import { LotFlow } from './lotFlow';

export type OTCDeskFilters = Partial<{
  search: string;
  sortBy: string;
  isReassign: boolean;
  onlyValidatedOffers: boolean;
  onlyDirectlySeller: boolean;
  minBidSize: number;
  deadline: string;
  lotType: LotFlow.LotType;
  assetVertical: string;
}>;
