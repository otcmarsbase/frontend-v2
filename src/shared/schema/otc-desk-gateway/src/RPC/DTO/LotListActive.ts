import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../Resource';

export namespace LotListActive {
  export type Payload = PaginationPayload & {
    search?: string;
    assets?: Resource.Asset.AssetKey['id'][];
    type?: Resource.Lot.Enums.LotType[];
    verticals?: Resource.Asset.Enums.AssetVertical[];
    tier?: Resource.Asset.Enums.AssetTier[];
    direction?: Resource.Common.Enums.TradeDirection;
    minContractValue?: number;
    maxContractValue?: number;
    withReassign?: boolean;
  };
  export type Result = Pagination<Resource.Lot.Lot>;
}
