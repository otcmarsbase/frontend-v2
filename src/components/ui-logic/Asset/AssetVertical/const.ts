import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import * as Icons from '../../../icons';

export const AssetVerticalIconMap = new Map<Resource.Asset.AssetVertical, ComponentWithAs<'svg', IconProps>>([
  ['BLOCKCHAIN_SERVICE', Icons.AssetVertical.BlockchainServiceIcon],
  ['BRIDGE', Icons.AssetVertical.BridgeIcon],
  ['CEFI', Icons.AssetVertical.CefiIcon],
  ['DEFI', Icons.AssetVertical.DefiIcon],
  ['GAMEFI', Icons.AssetVertical.GameFiIcon],
  ['INFRA', Icons.AssetVertical.InfraIcon],
  ['LAYER_1', Icons.AssetVertical.Layer1Icon],
  ['LENDING', Icons.AssetVertical.LendingIcon],
  ['METAVERSE', Icons.AssetVertical.MetaverseIcon],
  ['NFT', Icons.AssetVertical.NftIcon],
  ['SOCIAL', Icons.AssetVertical.SocialIcon],
  ['ZK_ROLLUP', Icons.AssetVertical.ZkRollupIcon],
]);

export const AssetVerticalTitleMap = new Map<Resource.Asset.AssetVertical, React.ReactNode>([
  ['BLOCKCHAIN_SERVICE', 'Blockchain service'],
  ['BRIDGE', 'Bridge'],
  ['CEFI', 'CEFI'],
  ['DEFI', 'DEFI'],
  ['GAMEFI', 'GameFI'],
  ['INFRA', 'Infrastructure'],
  ['LAYER_1', 'Layer 1'],
  ['LENDING', 'Lending'],
  ['METAVERSE', 'Metaverse'],
  ['NFT', 'NFT'],
  ['SOCIAL', 'Social'],
  ['ZK_ROLLUP', 'ZK Rollup'],
]);
