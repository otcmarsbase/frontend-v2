import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';
import { CommonCategory } from './CommonCategory';

export namespace InvestDocumentCategory {
  export type InputObject = LotInputs.Utils.MergeInputs<
    [
      CommonCategory.InputObject,

      LotInputs.INVEST_DOC_ASSET_CREATE_REQUEST,
      LotInputs.INVEST_DOC_ASSET_PK,
      LotInputs.INVEST_DOC_FDV,
      LotInputs.INVEST_DOC_ROUND_FDV,
      LotInputs.INVEST_DOC_ROUND_PRICE,
      LotInputs.INVEST_DOC_ROUND_SHARE,
      LotInputs.INVEST_DOC_ROUND_SUMMARY,
      LotInputs.INVEST_DOC_ROUND_TYPE,
      LotInputs.INVEST_DOC_ROUND_UNITS,
      LotInputs.INVEST_DOC_SHARE,
      LotInputs.INVEST_DOC_REASSIGNMENT_TYPE,
    ]
  >;

  export type AttributeObject = LotAttributes.Utils.MergeAttributes<[CommonCategory.AttributeObject, InputObject]>;
}
