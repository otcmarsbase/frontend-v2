import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';
import { InvestDocumentCategory } from './InvestDocumentCategory';

export namespace EquityCategory {
  export type InputObject = LotInputs.Utils.MergeInputs<[InvestDocumentCategory.InputObject]>;
  export type AttributeObject = LotAttributes.Utils.MergeAttributes<[InvestDocumentCategory.AttributeObject]>;
}
