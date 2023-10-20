import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';
import { InvestDocumentCategory } from './InvestDocumentCategory';

export namespace TokenWarrantCategory {
  export type InputObject = LotInputs.Utils.MergeInputs<[InvestDocumentCategory.InputObject, LotInputs.TOKEN_TGE, LotInputs.TOKEN_LOCKUP_PERIOD, LotInputs.TOKEN_VESTING_PERIOD]>;

  export type AttributeObject = LotAttributes.Utils.MergeAttributes<[InvestDocumentCategory.AttributeObject, InputObject]>;
}
