import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';
import { CommonCategory } from './CommonCategory';

export namespace InvestDocumentCategory {
  export type InputObject = CommonCategory.InputObject &
    LotInputs.Utils.MergeInputs<
      [
        LotInputs.INVEST_DOC_ASSET_PK_INPUT,
        LotInputs.INVEST_DOC_ASSET_CREATE_REQUEST_INPUT,
        LotInputs.INVEST_DOC_WITH_REASSIGN_INPUT,
        LotInputs.INVEST_DOC_FDV_INPUT,
        LotInputs.INVEST_DOC_SHARE_INPUT,

        LotInputs.INVEST_DOC_ROUND_TYPE_INPUT,
        LotInputs.INVEST_DOC_ROUND_PRICE_INPUT,
        LotInputs.INVEST_DOC_ROUND_UNITS_INPUT,
        LotInputs.INVEST_DOC_ROUND_FDV_INPUT,
        LotInputs.INVEST_DOC_ROUND_SHARE_INPUT,
        LotInputs.INVEST_DOC_ROUND_SUMMARY_INPUT,
      ]
    >;

  export type AttributeObject = CommonCategory.AttributeObject &
    LotAttributes.Utils.MergeAttributes<
      [
        LotAttributes.INVEST_DOC_ASSET_PK_ATTRIBUTE,
        LotAttributes.INVEST_DOC_ASSET_CREATE_REQUEST_ATTRIBUTE,
        LotAttributes.INVEST_DOC_WITH_REASSIGN_ATTRIBUTE,
        LotAttributes.INVEST_DOC_FDV_ATTRIBUTE,
        LotAttributes.INVEST_DOC_SHARE_ATTRIBUTE,

        LotAttributes.INVEST_DOC_ROUND_TYPE_ATTRIBUTE,
        LotAttributes.INVEST_DOC_ROUND_PRICE_ATTRIBUTE,
        LotAttributes.INVEST_DOC_ROUND_UNITS_ATTRIBUTE,
        LotAttributes.INVEST_DOC_ROUND_FDV_ATTRIBUTE,
        LotAttributes.INVEST_DOC_ROUND_SHARE_ATTRIBUTE,
        LotAttributes.INVEST_DOC_ROUND_SUMMARY_ATTRIBUTE,
      ]
    >;
}
