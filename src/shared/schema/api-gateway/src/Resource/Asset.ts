import { Resource, ResourceOmit } from '@schema/common';

export namespace Asset {
  export const AssetVertical = [
    'BLOCKCHAIN_SERVICE',
    'LAYER_1',
    'SOCIAL',
    'CEFI',
    'NFT',
    'BRIDGE',
    'METAVERSE',
    'ZK_ROLLUP',
    'LENDING',
    'INFRA',
    'GAMEFI',
    'DEFI',
  ] as const;
  export type AssetVertical = (typeof AssetVertical)[number];

  export const AssetLinkGroup = ['OFFICIAL', 'SOCIAL', 'OTHER'] as const;
  export type AssetLinkGroup = (typeof AssetLinkGroup)[number];

  export const AssetLinkType = ['SITE', 'WHITE_PAPER', 'GITHUB', 'TWITTER', 'REDDIT', 'DISCORD', 'OTHER'] as const;
  export type AssetLinkType = (typeof AssetLinkType)[number];

  export interface AssetKey extends Resource<'asset_key'> {
    id: string;
  }

  export interface Asset extends Resource<'asset'>, ResourceOmit<AssetKey> {
    info: AssetInfo;
    stats: AssetStats;
    score: number;
  }

  export interface AssetInfo {
    title: string;
    description: string;
    logo_url: string;

    links: AssetLink[];
    verticals: AssetVertical[];
  }

  export interface AssetStats {
    average_fdv: string;
    lot_sell_count: number;
    lot_buy_count: number;
    lot_sell_cv_sum: string;
    lot_buy_cv_sum: string;
  }

  export interface AssetLink extends Resource<'asset_link'> {
    type: AssetLinkType;
    title: string;
    group: AssetLinkGroup;
    url: string;
  }
}
