import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export const LotUnitAddonDictionary = createDictionary<DeskGatewaySchema.LotType, string>()
  .setFromEntries([
    ['SAFE', '%'],
    ['SAFT', ''],
    ['TOKEN_WARRANT', '%'],
    ['EQUITY', '%'],
    ['UNLOCKED_TOKENS', ''],
  ])
  .asReadonly();
