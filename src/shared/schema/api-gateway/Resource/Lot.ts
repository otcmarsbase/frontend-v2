import { Resource } from '@schema/common';

import { Asset } from './Asset';

export namespace Lot {
  export type Id = string;

  export type LotType = 'SAFE' | 'SAFT' | 'TOKEN_WARRANT';

  export type DealType = 'BUY' | 'SELL';

  export interface Lot extends Resource<'lot'> {
    id: Id;
    lot_type: LotType;
    is_hot: boolean;
    deal_type: DealType;
    asset: Asset.Asset;
    fdv: number;
    min_bid_size: number;
    total_bids_placed: number;
    deadline: number;
    total_sum: number;
    available_sum: number;
  }
}
