import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';

import { InvestDocumentCategory } from './InvestDocumentCategory';

export namespace SAFECategory {
  export type InputObject = LotInputs.Utils.MergeInputs<[InvestDocumentCategory.InputObject, LotInputs.SAFE_WITH_TOKEN_WARRANT]>;
  export type AttributeObject = LotAttributes.Utils.MergeAttributes<[InvestDocumentCategory.AttributeObject, InputObject]>;
}
