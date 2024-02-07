import { Resource } from '@schema/desk-gateway';

import { createDictionary } from '../../utils';

export const LotReassignmentTypeDictionary = createDictionary<
  Resource.Lot.Enums.LotReassignmentType,
  string
>().setFromEntries([
  ['DIRECT', 'Direct'],
  ['SPV', 'SPV'],
  ['FORWARD_CONTRACT', 'Forward contract'],
]);
