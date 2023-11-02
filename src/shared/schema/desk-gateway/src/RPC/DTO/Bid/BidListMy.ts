import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace BidListMy {
  type Include = 'lot';

  export type Payload = PaginationPayload & {
    status?: Resource.Bid.Enums.BidStatus[];
    include?: Include[];
  };

  export type Result = Pagination<Resource.Bid.Bid>;
}
