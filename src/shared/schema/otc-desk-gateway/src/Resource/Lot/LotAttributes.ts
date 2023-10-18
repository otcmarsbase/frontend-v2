import { Asset } from '../Asset';
import { Common } from '../Common';
import { Lot } from './Lot';

export namespace LotAttributes {
  export namespace Utils {
    export type Attribute<Name extends string, Value> = {
      [Key in Name]: Value;
    };

    type _MergeAttributes<T extends Attribute<any, any>[]> = T extends [infer I, ...infer U] ? I & (U extends [] ? {} : _MergeAttributes<U>) : {};

    export type MergeAttributes<T extends Attribute<any, any>[]> = {
      [Key in keyof _MergeAttributes<T> & string as `${Key}`]?: _MergeAttributes<T>[Key];
    };
  }

  export type COMMON_PRICE_ATTRIBUTE = Utils.Attribute<'COMMON_PRICE_ATTRIBUTE', Common.Finances.Price>;
  export type COMMON_DIRECTION_ATTRIBUTE = Utils.Attribute<'COMMON_DIRECTION_ATTRIBUTE', Common.Enums.TradeDirection>;
  export type COMMON_MEDIATOR_ATTRIBUTE = Utils.Attribute<'COMMON_MEDIATOR_ATTRIBUTE', Common.Enums.MediatorType>;
  export type COMMON_TELEGRAM_ATTRIBUTE = Utils.Attribute<'COMMON_TELEGRAM_ATTRIBUTE', Common.Text.Telegram>;
  export type COMMON_DEADLINE_ATTRIBUTE = Utils.Attribute<'COMMON_DEADLINE_ATTRIBUTE', number>;

  export type COMMON_OFFER_MAKER_TYPES_ATTRIBUTE = Utils.Attribute<'COMMON_OFFER_MAKER_TYPES_ATTRIBUTE', Common.Enums.InvestorType[]>;
  export type COMMON_BID_MAKER_TYPES_ATTRIBUTE = Utils.Attribute<'COMMON_BID_MAKER_TYPES_ATTRIBUTE', Common.Enums.InvestorType[]>;
  export type COMMON_UNITS_ATTRIBUTE = Utils.Attribute<'COMMON_UNITS_ATTRIBUTE', Common.Finances.UnitQuantity>;
  export type COMMON_SUMMARY_ATTRIBUTE = Utils.Attribute<'COMMON_SUMMARY_ATTRIBUTE', Common.Finances.StablecoinQuantity>;
  export type COMMON_MIN_FILTER_UNITS_ATTRIBUTE = Utils.Attribute<'COMMON_MIN_FILTER_UNITS_ATTRIBUTE', Common.Finances.UnitQuantity>;
  export type COMMON_MIN_FILTER_SUMMARY_ATTRIBUTE = Utils.Attribute<'COMMON_MIN_FILTER_SUMMARY_ATTRIBUTE', Common.Finances.StablecoinQuantity>;

  export type COMMON_CREATED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_CREATED_AT_ATTRIBUTE', number>;
  export type COMMON_SEND_ON_MODERATION_AT_ATTRIBUTE = Utils.Attribute<'COMMON_SEND_ON_MODERATION_AT_ATTRIBUTE', number>;
  export type COMMON_PUBLISHED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_PUBLISHED_AT_ATTRIBUTE', number>;

  // Only when archived
  export type COMMON_ARCHIVED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_ARCHIVED_AT_ATTRIBUTE', number>;

  // Only when completed
  export type COMMON_COMPLETED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_COMPLETED_AT_ATTRIBUTE', number>;
  export type COMMON_COMPLETED_REASON_ATTRIBUTE = Utils.Attribute<'COMMON_COMPLETED_REASON_ATTRIBUTE', Lot.Enums.LotCompletedReasonType>;

  // Only when rejected
  export type COMMON_REJECTED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_REJECTED_AT_ATTRIBUTE', number>;
  export type COMMON_REJECT_REASON_ATTRIBUTE = Utils.Attribute<'COMMON_REJECT_REASON_ATTRIBUTE', string>;

  export type INVEST_DOC_ASSET_PK_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ASSET_PK_ATTRIBUTE', Asset.AssetKey>;
  export type INVEST_DOC_ASSET_CREATE_REQUEST_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ASSET_CREATE_REQUEST_ATTRIBUTE', Lot.ValueObjects.AssetCreateRequest>;
  export type INVEST_DOC_WITH_REASSIGN_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_WITH_REASSIGN_ATTRIBUTE', boolean>;
  export type INVEST_DOC_FDV_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_FDV_ATTRIBUTE', Common.Finances.StablecoinQuantity>;
  export type INVEST_DOC_SHARE_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_SHARE_ATTRIBUTE', Common.Finances.Percent>;

  //  Только при SELL
  export type INVEST_DOC_ROUND_TYPE_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ROUND_TYPE_ATTRIBUTE', Common.Enums.InvestRound>;
  export type INVEST_DOC_ROUND_PRICE_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ROUND_PRICE_ATTRIBUTE', Common.Finances.Price>;
  export type INVEST_DOC_ROUND_UNITS_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ROUND_UNITS_ATTRIBUTE', Common.Finances.UnitQuantity>;
  export type INVEST_DOC_ROUND_FDV_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ROUND_FDV_ATTRIBUTE', Common.Finances.StablecoinQuantity>;
  export type INVEST_DOC_ROUND_SHARE_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ROUND_SHARE_ATTRIBUTE', Common.Finances.Percent>;
  export type INVEST_DOC_ROUND_SUMMARY_ATTRIBUTE = Utils.Attribute<'INVEST_DOC_ROUND_SUMMARY_ATTRIBUTE', Common.Finances.StablecoinQuantity>;

  export type SAFE_WITH_TOKEN_WARRANT_ATTRIBUTE = Utils.Attribute<'SAFE_WITH_TOKEN_WARRANT_ATTRIBUTE', boolean>;

  export type TOKEN_TGE_ATTRIBUTE = Utils.Attribute<'TOKEN_TGE_ATTRIBUTE', Common.Dates.TGE>;
  export type TOKEN_LOCKUP_PERIOD_ATTRIBUTE = Utils.Attribute<'TOKEN_LOCKUP_PERIOD_ATTRIBUTE', Common.Text.LockupPeriod>;
  export type TOKEN_VESTING_PERIOD_ATTRIBUTE = Utils.Attribute<'TOKEN_VESTING_PERIOD_ATTRIBUTE', Common.Text.VestingPeriod>;
}
