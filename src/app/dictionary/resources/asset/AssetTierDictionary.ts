import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export const AssetTierDictionary = createDictionary<DeskGatewaySchema.AssetTier, React.ReactNode>()
  .setFromEntries([
    ['TIER_1', 'Tier 1'],
    ['TIER_2', 'Tier 2'],
    ['TIER_3', 'Tier 3'],
    ['TIER_4', 'Tier 4'],
  ])
  .asReadonly();
