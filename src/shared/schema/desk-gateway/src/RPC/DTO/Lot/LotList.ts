import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace LotList {
  export type Filter = CompositeFilter<{
    search?: string;
    type?: Resource.Lot.Enums.LotType[];
    status?: Resource.Lot.Enums.LotStatus[];
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

    onlyMy?: boolean;
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Lot.Lot>;
}
