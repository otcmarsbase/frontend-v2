import { LotAttributes } from '../LotAttributes';
import { LotInputs } from '../LotInputs';

export namespace CommonCategory {
  export type InputObject = LotInputs.Utils.MergeInputs<
    [
      LotInputs.COMMON_PRICE_INPUT,
      LotInputs.COMMON_DIRECTION_INPUT,
      LotInputs.COMMON_MEDIATOR_INPUT,
      LotInputs.COMMON_TELEGRAM_INPUT,
      LotInputs.COMMON_OFFER_MAKER_TYPES_INPUT,
      LotInputs.COMMON_BID_MAKER_TYPES_INPUT,
      LotInputs.COMMON_UNITS_INPUT,
      LotInputs.COMMON_SUMMARY_INPUT,
      LotInputs.COMMON_MIN_FILTER_UNITS_INPUT,
      LotInputs.COMMON_MIN_FILTER_SUMMARY_INPUT,
      LotInputs.COMMON_COMPLETED_REASON_INPUT,
      LotInputs.COMMON_DEADLINE_INPUT,
    ]
  >;

  export type AttributeObject = LotAttributes.Utils.MergeAttributes<
    [
      LotAttributes.COMMON_PRICE_ATTRIBUTE,
      LotAttributes.COMMON_DIRECTION_ATTRIBUTE,
      LotAttributes.COMMON_MEDIATOR_ATTRIBUTE,
      LotAttributes.COMMON_TELEGRAM_ATTRIBUTE,
      LotAttributes.COMMON_OFFER_MAKER_TYPES_ATTRIBUTE,
      LotAttributes.COMMON_BID_MAKER_TYPES_ATTRIBUTE,
      LotAttributes.COMMON_UNITS_ATTRIBUTE,
      LotAttributes.COMMON_SUMMARY_ATTRIBUTE,
      LotAttributes.COMMON_MIN_FILTER_UNITS_ATTRIBUTE,
      LotAttributes.COMMON_MIN_FILTER_SUMMARY_ATTRIBUTE,
      LotAttributes.COMMON_CREATED_AT_ATTRIBUTE,
      LotAttributes.COMMON_SEND_ON_MODERATION_AT_ATTRIBUTE,
      LotAttributes.COMMON_PUBLISHED_AT_ATTRIBUTE,
      LotAttributes.COMMON_ARCHIVED_AT_ATTRIBUTE,
      LotAttributes.COMMON_COMPLETED_AT_ATTRIBUTE,
      LotAttributes.COMMON_COMPLETED_REASON_ATTRIBUTE,
      LotAttributes.COMMON_DEADLINE_ATTRIBUTE,
      LotAttributes.COMMON_REJECTED_AT_ATTRIBUTE,
      LotAttributes.COMMON_REJECT_REASON_ATTRIBUTE,
    ]
  >;
}
