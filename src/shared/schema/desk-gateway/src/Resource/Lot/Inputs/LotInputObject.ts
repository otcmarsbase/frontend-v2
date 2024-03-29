import { MergeAttributes } from '@schema/core';

import { EquityCategory, SAFECategory, SAFTCategory, TokenWarrantCategory, UnlockedTokensCategory } from '../Categories';

export type LotInputObject = MergeAttributes<[SAFTCategory.InputObject, SAFECategory.InputObject, TokenWarrantCategory.InputObject, EquityCategory.InputObject, UnlockedTokensCategory.InputObject]>;
