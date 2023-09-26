import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../Resource';

export namespace DealsListMy {
  export type Payload = PaginationPayload & {};
  export type Result = Pagination<Resource.Deal.Deal>;
}
