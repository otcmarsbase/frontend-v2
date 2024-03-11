import * as SchemaCommon from '@schema/common';

import { Common } from '../Common';
import { User } from '../User';

import { EquityCategory, SAFECategory, SAFTCategory, TokenWarrantCategory, UnlockedTokensCategory } from './Categories';
import { LotAttributes } from './LotAttributes';
import { LotInputs } from './LotInputs';

export namespace Lot {
  export namespace Enums {
    export const LotType = ['SAFE', 'SAFT', 'TOKEN_WARRANT', 'EQUITY', 'UNLOCKED_TOKENS'] as const;
    export type LotType = (typeof LotType)[number];

    export const LotStatus = ['DRAFT', 'ON_MODERATION', 'ACTIVE', 'REJECTED', 'COMPLETED', 'ARCHIVED'] as const;
    export type LotStatus = (typeof LotStatus)[number];

    export const LotCompletedReasonType = ['DEADLINE', 'FULFILLED', 'MANUALLY'] as const;
    export type LotCompletedReasonType = (typeof LotCompletedReasonType)[number];

    export const LotReassignmentType = ['DIRECT', 'SPV', 'FORWARD_CONTRACT'] as const;
    export type LotReassignmentType = (typeof LotReassignmentType)[number];
  }

  export namespace ValueObjects {
    export interface AssetCreateRequest {
      title: string;
      website: string;
    }
  }

  export type LotInputObject = LotInputs.Utils.MergeInputs<
    [SAFTCategory.InputObject, SAFECategory.InputObject, TokenWarrantCategory.InputObject, EquityCategory.InputObject, UnlockedTokensCategory.InputObject]
  >;
  export type LotAttributesObject = LotAttributes.Utils.MergeAttributes<
    [SAFTCategory.AttributeObject, SAFECategory.AttributeObject, TokenWarrantCategory.AttributeObject, EquityCategory.AttributeObject, UnlockedTokensCategory.AttributeObject]
  >;

  export interface LotKey extends SchemaCommon.ResourceKey<'lot'> {
    id: number;
  }

  export interface Lot extends SchemaCommon.Resource<'lot'>, SchemaCommon.ResourceOmit<LotKey> {
    offerMaker: User.User;
    status: Enums.LotStatus;
    type: Enums.LotType;

    // Stats
    totalBids: number;
    score: number;
    isHot: boolean;

    // When active + completed
    executed?: Common.Finances.StablecoinQuantity;
    reserved?: Common.Finances.StablecoinQuantity;
    available?: Common.Finances.StablecoinQuantity;
    total?: Common.Finances.StablecoinQuantity;

    // Attributes
    attributes: LotAttributesObject;
  }
}
