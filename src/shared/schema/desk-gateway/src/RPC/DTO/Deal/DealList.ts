import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace DealList {
  export type Filter = CompositeFilter<{
    status?: Resource.Deal.Enums.DealStatus[];
    bids?: Resource.Bid.BidKey['id'][];
    lots?: Resource.Lot.LotKey['id'][];
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Deal.Deal>;
}
