import * as SchemaCommon from '@schema/common';

import { Asset } from './Asset';
import { Common } from './Common';
import { Deal } from './Deal';
import { Lot } from './Lot';
import { User } from './User';

export namespace Bid {
  export namespace Enums {
    export const BidStatus = ['ON_MODERATION', 'ACTIVE', 'DEAL', 'REJECTED'] as const;
    export type BidStatus = (typeof BidStatus)[number];
  }

  export interface BidKey extends SchemaCommon.ResourceKey<'bid'> {
    id: number;
  }

  export interface Bid extends SchemaCommon.Resource<'bid'>, SchemaCommon.ResourceOmit<BidKey> {
    createdAt: number;
    deadline?: number;
    status: Enums.BidStatus;
    lotKey: Lot.LotKey;
    assetKey: Asset.AssetKey;
    bidMaker: User.User;
    bidMakerType: Common.Enums.InvestorType;
    location: Common.Enums.Location;
    mediatorType: Common.Enums.MediatorType;
    telegram: Common.Text.Telegram;
    contractSize: Common.Finances.ContractSize;
    readyForVerification: boolean;
    deal?: Deal.DealKey;
  }
}
