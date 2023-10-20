import * as SchemaCommon from '@schema/common';

export namespace Asset {
  export namespace Enums {
    export const AssetLinkGroup = ['OFFICIAL', 'SOCIAL', 'OTHER'] as const;
    export type AssetLinkGroup = (typeof AssetLinkGroup)[number];

    export const AssetLinkType = ['SITE', 'WHITE_PAPER', 'GITHUB', 'TWITTER', 'REDDIT', 'DISCORD', 'OTHER'] as const;
    export type AssetLinkType = (typeof AssetLinkType)[number];

    export const AssetTier = ['TIER_1', 'TIER_2', 'TIER_3', 'TIER_4'] as const;
    export type AssetTier = (typeof AssetTier)[number];

    export const AssetVertical = ['BLOCKCHAIN_SERVICE', 'LAYER_1', 'SOCIAL', 'CEFI', 'NFT', 'BRIDGE', 'METAVERSE', 'ZK_ROLLUP', 'LENDING', 'INFRA', 'GAMEFI', 'DEFI'] as const;
    export type AssetVertical = (typeof AssetVertical)[number];
  }

  export namespace ValueObjects {
    export interface AssetInfo {
      title: string;
      description: string;
      logoURL: string;
      tier: Enums.AssetTier;
      links: AssetLink[];
      verticals: Enums.AssetVertical[];
    }

    export interface AssetLink {
      type: Enums.AssetLinkType;
      group: Enums.AssetLinkGroup;
      title: string;
      url: string;
    }
  }

  export interface AssetKey extends SchemaCommon.ResourceKey<'asset'> {
    id: string;
  }

  export interface Asset extends SchemaCommon.Resource<'asset'>, SchemaCommon.ResourceOmit<AssetKey> {
    info: ValueObjects.AssetInfo;
    score: number;
  }
}
