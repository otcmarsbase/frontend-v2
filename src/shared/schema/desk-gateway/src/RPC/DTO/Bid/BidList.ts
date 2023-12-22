import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';
import { LotList } from '../Lot';

export namespace BidList {
  export type Filter = CompositeFilter<{
    id?: Resource.Bid.BidKey['id'][];

    status?: Resource.Bid.Enums.BidStatus[];
    onlyMy?: boolean;

    lot?: LotList.Filter;
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Bid.Bid>;
}
