import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace LotListActive {
  export type Payload = PaginationPayload & {
    search?: string;
    type?: Resource.Lot.Enums.LotType[];
    verticals?: Resource.Asset.Enums.AssetVertical[];
    tier?: Resource.Asset.Enums.AssetTier[];
    direction?: Resource.Common.Enums.TradeDirection;
    minContractValue?: number;
    maxContractValue?: number;
    withReassign?: boolean;
    isHot?: boolean;

    assets?: Resource.Asset.AssetKey['id'][];
    bids?: Resource.Bid.BidKey['id'][];
    deals?: Resource.Deal.DealKey['id'][];
  };
  export type Result = Pagination<Resource.Lot.Lot>;
}
