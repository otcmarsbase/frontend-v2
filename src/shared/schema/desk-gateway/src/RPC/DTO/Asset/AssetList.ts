import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';
import { BidList } from '../Bid';
import { DealList } from '../Deal';
import { LotList } from '../Lot';

export namespace AssetList {
  export type Filter = CompositeFilter<{
    id?: Resource.Asset.AssetKey['id'][];

    search?: string;
    withLots?: boolean;
    tier?: Resource.Asset.Enums.AssetTier[];
    verticals?: Resource.Asset.Enums.AssetVertical[];

    lot?: LotList.Filter;
    bid?: BidList.Filter;
    deal?: DealList.Filter;
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Asset.Asset>;
}
