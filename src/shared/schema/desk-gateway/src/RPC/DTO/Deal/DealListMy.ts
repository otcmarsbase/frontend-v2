import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace DealListMy {
  export type Payload = PaginationPayload & {
    status?: Resource.Deal.Enums.DealStatus[];
    bids?: Resource.Bid.BidKey['id'][];
    lots?: Resource.Lot.LotKey['id'][];
  };
  export type Result = Pagination<Resource.Deal.Deal>;
}
