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

    export const BidRejectReasonType = ['OFFER_MAKER_REJECT', 'MODERATOR_REJECT'] as const;
    export type BidRejectReasonType = (typeof BidRejectReasonType)[number];
  }

  export interface BidKey extends SchemaCommon.ResourceKey<'bid'> {
    id: number;
  }

  export interface Bid extends SchemaCommon.Resource<'bid'>, SchemaCommon.ResourceOmit<BidKey> {
    createdAt: number;
    deadline?: number;
    status: Enums.BidStatus;
    bidMakerType: Common.Enums.InvestorType;
    location: Common.Enums.Location;
    mediatorType: Common.Enums.MediatorType;
    telegram: Common.Text.Telegram;
    readyForVerification: boolean;
    rejectReason: Enums.BidRejectReasonType;

    summary: Common.Finances.StablecoinQuantity;
    units: Common.Finances.StablecoinQuantity;
    price: Common.Finances.Price;
    fdv?: Common.Finances.StablecoinQuantity;

    // References
    lotKey: Lot.LotKey;
    bidMaker: User.User;
    assetKey: Asset.AssetKey;
    dealKey?: Deal.DealKey;
  }
}
