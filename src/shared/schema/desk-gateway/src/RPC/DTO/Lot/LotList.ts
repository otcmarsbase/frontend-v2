import { CoreSchema } from '@schema/core';

import {
  AssetTier,
  AssetVertical,
  Lot,
  LotKey,
  LotReassignmentType,
  LotStatus,
  LotTotalBidsCountAggregation,
  LotTransactionStatsAggregation,
  LotType,
  TradeDirection,
  User,
  UserKey,
} from '../../../Resource';
import { AssetList } from '../Asset';
import { BidList } from '../Bid';
import { DealList } from '../Deal';

export namespace LotList {
  export type Filter = CoreSchema.CompositeFilter<{
    id?: LotKey['id'][];

    search?: string;
    type?: LotType[];
    status?: LotStatus[];
    verticals?: AssetVertical[];
    tier?: AssetTier[];
    direction?: TradeDirection;
    minContractValue?: number;
    maxContractValue?: number;
    reassignmentType?: LotReassignmentType[];
    isHot?: boolean;
    onlyMy?: boolean;
    offerMaker?: UserKey['id'][];

    asset?: AssetList.Filter;
    bid?: BidList.Filter;
    deal?: DealList.Filter;
  }>;

  export type Include = CoreSchema.Include<
    Lot,
    {
      asset: AssetList.Include;
      lotTotalBidsCountAggregation: LotTotalBidsCountAggregation;
      lotTransactionStatsAggregation: LotTransactionStatsAggregation;
      offerMaker: User;
    }
  >;

  export type Sortable = {
    id?: CoreSchema.SortableValue;
  };

  export type Payload = CoreSchema.WithFilter<Filter> &
    CoreSchema.WithInclude<Include> &
    CoreSchema.WithSortable<Sortable> &
    CoreSchema.WithPagination;
  export type Result = CoreSchema.WithPaginationResult<Lot> & CoreSchema.WithIncludeLinks<Include>;
}
