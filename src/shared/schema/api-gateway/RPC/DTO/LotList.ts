import { Pagination } from '@schema/common';

import { Resource } from '../../Resource';

export namespace LotList {
  export type Payload = {
    assetId?: string;
  };
  export type Result = Pagination<Resource.Lot.Lot>;
}
