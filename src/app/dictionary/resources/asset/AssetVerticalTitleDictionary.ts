import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export const AssetVerticalTitleDictionary = createDictionary<DeskGatewaySchema.AssetVertical, React.ReactNode>()
  .setFromEntries([
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
  ])
  .asReadonly();
