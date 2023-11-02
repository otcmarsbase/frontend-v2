import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace BidListByLot {
  export type Payload = PaginationPayload & {
    lots?: number[];
    status?: Resource.Bid.Enums.BidStatus[];
  };

  export type Result = Pagination<Resource.Bid.Bid>;
}
