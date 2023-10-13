import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../Resource';

export namespace BidListMy {
  export type Payload = PaginationPayload & {
    status?: Resource.Bid.Enums.BidStatus[];
  };

  export type Result = Pagination<Resource.Bid.Bid>;
}
