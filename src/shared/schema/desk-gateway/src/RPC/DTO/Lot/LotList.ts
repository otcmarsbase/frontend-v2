import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';
import { AssetList } from '../Asset';
import { BidList } from '../Bid';
import { DealList } from '../Deal';

export namespace LotList {
  export type Filter = CompositeFilter<{
    id?: Resource.Lot.LotKey['id'][];

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
    onlyMy?: boolean;

    asset?: AssetList.Filter;
    bid?: BidList.Filter;
    deal?: DealList.Filter;
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Lot.Lot>;
}
