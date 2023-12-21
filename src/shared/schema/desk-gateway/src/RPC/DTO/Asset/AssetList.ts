import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace AssetList {
  export type Filter = CompositeFilter<{
    search?: string;
    withLots?: boolean;
    tier?: Resource.Asset.Enums.AssetTier[];
    verticals?: Resource.Asset.Enums.AssetVertical[];

    lots?: Resource.Lot.LotKey['id'][];
    bids?: Resource.Bid.BidKey['id'][];
    deals?: Resource.Deal.DealKey['id'][];
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Asset.Asset>;
}
