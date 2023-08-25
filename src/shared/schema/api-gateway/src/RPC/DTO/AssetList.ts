import { Pagination } from '@schema/common';

import { Resource } from '../../Resource';

export namespace AssetList {
  export type Payload = {};
  export type Result = Pagination<Resource.Asset.Asset>;
}
