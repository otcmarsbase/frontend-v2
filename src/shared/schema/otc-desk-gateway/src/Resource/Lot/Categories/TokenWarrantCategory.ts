import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';
import { InvestDocumentCategory } from './InvestDocumentCategory';

export namespace TokenWarrantCategory {
  export type InputObject = InvestDocumentCategory.InputObject & LotInputs.Utils.MergeInputs<[LotInputs.TOKEN_TGE_INPUT, LotInputs.TOKEN_LOCKUP_PERIOD_INPUT, LotInputs.TOKEN_VESTING_PERIOD_INPUT]>;

  export type AttributeObject = InvestDocumentCategory.AttributeObject &
    LotAttributes.Utils.MergeAttributes<[LotAttributes.TOKEN_TGE_ATTRIBUTE, LotAttributes.TOKEN_LOCKUP_PERIOD_ATTRIBUTE, LotAttributes.TOKEN_VESTING_PERIOD_ATTRIBUTE]>;
}
