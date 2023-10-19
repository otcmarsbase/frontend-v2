import { Common } from '../Common';

import { Lot } from './Lot';

export namespace LotInputs {
  export namespace Utils {
    export type Input<Name extends string, Value> = {
      [Key in Name]: Value;
    };

    type _MergeInputs<T extends Input<any, any>[]> = T extends [infer I, ...infer U]
      ? I & (U extends [] ? {} : _MergeInputs<U>)
      : {};

    export type MergeInputs<T extends Input<any, any>[]> = {
      [Key in keyof _MergeInputs<T> & string as `${Key}`]?: _MergeInputs<T>[Key];
    };
  }

  export type COMMON_PRICE_INPUT = Utils.Input<'COMMON_PRICE_INPUT', string>;
  export type COMMON_DIRECTION_INPUT = Utils.Input<'COMMON_DIRECTION_INPUT', Common.Enums.TradeDirection>;
  export type COMMON_MEDIATOR_INPUT = Utils.Input<'COMMON_MEDIATOR_INPUT', Common.Enums.MediatorType>;
  export type COMMON_TELEGRAM_INPUT = Utils.Input<'COMMON_TELEGRAM_INPUT', string>;
  export type COMMON_DEADLINE_INPUT = Utils.Input<'COMMON_DEADLINE_INPUT', number>;

  export type COMMON_OFFER_MAKER_TYPES_INPUT = Utils.Input<
    'COMMON_OFFER_MAKER_TYPES_INPUT',
    Common.Enums.InvestorType[]
  >;
  export type COMMON_BID_MAKER_TYPES_INPUT = Utils.Input<'COMMON_BID_MAKER_TYPES_INPUT', Common.Enums.InvestorType[]>;
  export type COMMON_UNITS_INPUT = Utils.Input<'COMMON_UNITS_INPUT', string>;
  export type COMMON_SUMMARY_INPUT = Utils.Input<'COMMON_SUMMARY_INPUT', string>;
  export type COMMON_MIN_FILTER_UNITS_INPUT = Utils.Input<'COMMON_MIN_FILTER_UNITS_INPUT', string>;
  export type COMMON_MIN_FILTER_SUMMARY_INPUT = Utils.Input<'COMMON_MIN_FILTER_SUMMARY_INPUT', string>;

  export type COMMON_COMPLETED_REASON_INPUT = Utils.Input<
    'COMMON_COMPLETED_REASON_INPUT',
    Lot.Enums.LotCompletedReasonType
  >;

  export type INVEST_DOC_ASSET_PK_INPUT = Utils.Input<'INVEST_DOC_ASSET_PK_INPUT', string>;
  export type INVEST_DOC_ASSET_CREATE_REQUEST_INPUT = Utils.Input<
    'INVEST_DOC_ASSET_CREATE_REQUEST_INPUT',
    Lot.ValueObjects.AssetCreateRequest
  >;
  export type INVEST_DOC_WITH_REASSIGN_INPUT = Utils.Input<'INVEST_DOC_WITH_REASSIGN_INPUT', boolean>;
  export type INVEST_DOC_FDV_INPUT = Utils.Input<'INVEST_DOC_FDV_INPUT', string>;
  export type INVEST_DOC_SHARE_INPUT = Utils.Input<'INVEST_DOC_SHARE_INPUT', number>;

  // Only when SELL
  export type INVEST_DOC_ROUND_TYPE_INPUT = Utils.Input<'INVEST_DOC_ROUND_TYPE_INPUT', Common.Enums.InvestRound>;
  export type INVEST_DOC_ROUND_PRICE_INPUT = Utils.Input<'INVEST_DOC_ROUND_PRICE_INPUT', string>;
  export type INVEST_DOC_ROUND_UNITS_INPUT = Utils.Input<'INVEST_DOC_ROUND_UNITS_INPUT', string>;
  export type INVEST_DOC_ROUND_FDV_INPUT = Utils.Input<'INVEST_DOC_ROUND_FDV_INPUT', string>;
  export type INVEST_DOC_ROUND_SHARE_INPUT = Utils.Input<'INVEST_DOC_ROUND_SHARE_INPUT', number>;
  export type INVEST_DOC_ROUND_SUMMARY_INPUT = Utils.Input<'INVEST_DOC_ROUND_SUMMARY_INPUT', string>;

  export type SAFE_WITH_TOKEN_WARRANT_INPUT = Utils.Input<'SAFE_WITH_TOKEN_WARRANT_INPUT', boolean>;

  export type TOKEN_TGE_INPUT = Utils.Input<'TOKEN_TGE_INPUT', number | 'TBD'>;
  export type TOKEN_LOCKUP_PERIOD_INPUT = Utils.Input<'TOKEN_LOCKUP_PERIOD_INPUT', string>;
  export type TOKEN_VESTING_PERIOD_INPUT = Utils.Input<'TOKEN_VESTING_PERIOD_INPUT', string>;
}
