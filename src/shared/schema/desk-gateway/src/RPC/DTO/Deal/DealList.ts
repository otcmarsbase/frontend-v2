import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';
import { BidList } from '../Bid';
import { LotList } from '../Lot';

export namespace DealList {
  export type Filter = CompositeFilter<{
    id?: Resource.Deal.DealKey['id'][];

    status?: Resource.Deal.Enums.DealStatus[];
    offerMaker?: Resource.User.UserKey['id'][];
    bidMaker?: Resource.User.UserKey['id'][];

    bid?: BidList.Filter;
    lot?: LotList.Filter;
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Deal.Deal>;
}
