import { LotFlow } from './lot-flow';

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
