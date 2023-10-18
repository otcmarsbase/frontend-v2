import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';
import { InvestDocumentCategory } from './InvestDocumentCategory';

export namespace SAFECategory {
  export type InputObject = InvestDocumentCategory.InputObject & LotInputs.Utils.MergeInputs<[LotInputs.SAFE_CATEGORY_WITH_TOKEN_WARRANT_INPUT]>;
  export type AttributeObject = InvestDocumentCategory.AttributeObject & LotAttributes.Utils.MergeAttributes<[LotAttributes.SAFE_CATEGORY_WITH_TOKEN_WARRANT_ATTRIBUTE]>;
}
