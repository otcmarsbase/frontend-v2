import * as SchemaCommon from '@schema/common';

import { User } from '../User';

import { LotBase as _LotBase, LotCommon as _LotCommon, LotSAFE as _LotSAFE, LotSAFT as _LotSAFT, LotTokenWarrant as _LotTokenWarrant } from './Types';

export namespace Lot {
  export import LotBase = _LotBase;
  export import LotCommon = _LotCommon;

  export import LotSAFE = _LotSAFE;
  export import LotSAFT = _LotSAFT;
  export import LotTokenWarrant = _LotTokenWarrant;

  export namespace Enums {
    export const LotType = ['SAFE', 'SAFT', 'TOKEN_WARRANT'] as const;
    export type LotType = (typeof LotType)[number];

    export const LotStatus = ['DRAFT', 'ON_MODERATION', 'ACTIVE', 'REJECTED', 'COMPLETED', 'ARCHIVED'] as const;
    export type LotStatus = (typeof LotStatus)[number];

    export const LotCompletedReasonType = ['DEADLINE', 'FULFILLED', 'MANUALLY'] as const;
    export type LotCompletedReasonType = (typeof LotCompletedReasonType)[number];
  }

  export namespace ValueObjects {
    export type AssetCreateRequest = {
      title: string;
      website: string;
    };
  }

  export interface LotKey extends SchemaCommon.ResourceKey<'lot'> {
    id: number;
  }

  export type Lot = SchemaCommon.Resource<'lot'> &
    SchemaCommon.ResourceOmit<LotKey> &
    LotContent & {
      offerMaker: User.User;
      totalBids: number;
      score: number;
      isHot: boolean;
    };

  export type LotContent = SchemaCommon.Merge<
    [
      LotBase.LotTypeModel<'SAFE', LotSAFE.State>,
      LotBase.LotTypeModel<'SAFT', LotSAFT.State>,
      LotBase.LotTypeModel<'TOKEN_WARRANT', LotTokenWarrant.State>,
    ]
  >;
}
