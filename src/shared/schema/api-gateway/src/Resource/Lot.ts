import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

import { Asset } from './Asset';
import { Common } from './Common';
import { User } from './User';

export namespace Lot {
  export const LotType = ['SAFE', 'SAFE_TOKEN_WARRANT', 'SAFT', 'TOKEN_WARRANT'] as const;
  export type LotType = (typeof LotType)[number];

  export const LotStatus = [
    'DRAFT',
    'ON_MODERATE',
    'REJECTED',
    'ACTIVE',
    'PARTIALLY_COMPLETED',
    'COMPLETED',
    'UNPUBLISHED',
    'ARCHIVED',
  ] as const;
  export type LotStatus = (typeof LotStatus)[number];

  export interface LotKey extends ResourceKey<'lot'> {
    id: string;
  }

  export interface Lot extends Resource<'lot'>, ResourceOmit<LotKey> {
    type: LotType;
    with_token_warrant?: boolean; // Only for SAFE when SELL
    owner: User.UserKey;
    ownerType: Common.ParticipantType[] | 'NO_LIMIT';
    asset: Asset.AssetKey;
    direction: Common.TradeDirection;
    status: LotStatus;
    isDirect: boolean;
    deadline?: number;
    execution_quantity_info: LotExecutionQuantityInfo;
    valuation_info: Common.ValuationInfo;
    score: number; // Only for ACTIVE

    // Only for direction: SELL
    round_info?: LotRoundInfo;
    filters: LotFilter[];
  }

  export interface LotExecutionQuantityInfo {
    executed: Common.UnitFullQuantity;
    reserved: Common.UnitFullQuantity;
    available: Common.UnitFullQuantity;
    total: Common.UnitFullQuantity;

    total_bids: number;
  }

  export interface LotRoundInfo {
    type: Common.RoundType;
    valuation_info: Common.ValuationInfo;
  }
  // Filters

  export type LotFilter = LotUnitSizeFilter | LotUnitSizeMultiplierFilter;

  export type LotUnitSizeFilter = {
    type: 'UNIT_SIZE_FILTER';
    step_size: string;
    min_size: string;
    max_size: string;
  };

  export type LotUnitSizeMultiplierFilter = {
    type: 'UNIT_SIZE_MULTIPLIER_FILTER';
    multiplier: string;
  };
}
