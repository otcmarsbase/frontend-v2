import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace BidList {
  export type Filter = CompositeFilter<{
    lots?: Resource.Lot.LotKey['id'][];
    status?: Resource.Bid.Enums.BidStatus[];
    onlyMy?: boolean;
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Bid.Bid>;
}
