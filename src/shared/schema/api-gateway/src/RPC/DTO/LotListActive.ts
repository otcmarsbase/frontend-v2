import { Pagination } from '@schema/common';

import { Resource } from '../../Resource';

export namespace LotListActive {
  export type Payload = {};
  export type Result = Pagination<Resource.Lot.Lot>;
}
