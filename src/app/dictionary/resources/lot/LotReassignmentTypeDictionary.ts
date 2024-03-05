import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export const LotReassignmentTypeDictionary = createDictionary<
  DeskGatewaySchema.LotReassignmentType,
  string
>().setFromEntries([
  ['DIRECT', 'Direct'],
  ['SPV', 'SPV'],
  ['FORWARD_CONTRACT', 'Forward contract'],
]);
