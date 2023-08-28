import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';

export const AssetVerticalIconMap = new Map<Resource.Asset.AssetVertical, ComponentWithAs<'svg', IconProps>>([
  ['BLOCKCHAIN_SERVICE', UIIcons.AssetVertical.BlockchainServiceIcon],
  ['BRIDGE', UIIcons.AssetVertical.BridgeIcon],
  ['CEFI', UIIcons.AssetVertical.CefiIcon],
  ['DEFI', UIIcons.AssetVertical.DefiIcon],
  ['GAMEFI', UIIcons.AssetVertical.GameFiIcon],
  ['INFRA', UIIcons.AssetVertical.InfraIcon],
  ['LAYER_1', UIIcons.AssetVertical.Layer1Icon],
  ['LENDING', UIIcons.AssetVertical.LendingIcon],
  ['METAVERSE', UIIcons.AssetVertical.MetaverseIcon],
  ['NFT', UIIcons.AssetVertical.NftIcon],
  ['SOCIAL', UIIcons.AssetVertical.SocialIcon],
  ['ZK_ROLLUP', UIIcons.AssetVertical.ZkRollupIcon],
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
