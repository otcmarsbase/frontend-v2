import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../Resource';
import { Common } from '../../Resource/Common';
import { Lot } from '../../Resource/Lot';

export namespace LotList {
  export type Payload = PaginationPayload & {
    asset_id?: string[];
    direction?: Common.TradeDirection;
    type?: Lot.LotType[];
  };
  export type Result = Pagination<Resource.Lot.Lot>;
}
