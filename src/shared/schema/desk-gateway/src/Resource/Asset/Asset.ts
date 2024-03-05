import { CoreSchema } from '@schema/core';

import { AssetKey } from './AssetKey';
import { AssetInfo } from './ValueObjects';

export interface Asset extends CoreSchema.Resource<'asset', AssetKey> {
  info: AssetInfo;
  score: number;
}
