import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';

import { createDictionary } from '../../utils';

export const AssetVerticalIconDictionary = createDictionary<
  DeskGatewaySchema.AssetVertical,
  ComponentWithAs<'svg', IconProps>
>()
  .setFromEntries([
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
  ])
  .asReadonly();
