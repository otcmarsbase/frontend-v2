import { MergeAttributes } from '@schema/core';

import { EquityCategory, SAFECategory, SAFTCategory, TokenWarrantCategory, UnlockedTokensCategory } from '../Categories';

export type LotAttributesObject = MergeAttributes<
  [SAFTCategory.AttributeObject, SAFECategory.AttributeObject, TokenWarrantCategory.AttributeObject, EquityCategory.AttributeObject, UnlockedTokensCategory.InputObject]
>;
