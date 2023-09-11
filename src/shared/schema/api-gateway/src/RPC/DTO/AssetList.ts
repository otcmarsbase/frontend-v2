import { Pagination, PaginationPayload } from '@schema/common';

import { Resource } from '../../Resource';

export namespace AssetList {
  export type Payload = PaginationPayload & {
    search?: string;
    withLots?: boolean;
  };
  export type Result = Pagination<Resource.Asset.Asset>;
}
