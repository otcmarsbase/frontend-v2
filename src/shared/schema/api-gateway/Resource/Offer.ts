import { Resource } from '@schema/common';

import { Asset } from './Asset';
import { Lot } from './Lot';

export namespace Offer {
  export type Id = string;

  export type OfferType = 'BUY' | 'SELL';

  export type OfferStatus = 'DRAFT' | 'ACTIVE' | 'ON_MODERATION' | 'ENDED' | 'HALF_FIELD';

  export interface Offer extends Resource<'offer'> {
    id: Id;
    status: OfferStatus;
    is_hot: boolean;
    offer_type: OfferType;
    published_at: number;
    finished_at: number;
    fdv: number;
    total_bids_place: number;
    lot_value: number;
    lot_type: Lot.LotType;
    asset: Asset.Asset;
    vertical_count: number;
  }
}
