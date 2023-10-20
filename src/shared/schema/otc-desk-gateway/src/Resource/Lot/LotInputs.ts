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

  export type COMMON_PRICE = Utils.Input<'COMMON_PRICE', string>;
  export type COMMON_DIRECTION = Utils.Input<'COMMON_DIRECTION', Common.Enums.TradeDirection>;
  export type COMMON_IS_DIRECT = Utils.Input<'COMMON_IS_DIRECT', boolean>;
  export type COMMON_TELEGRAM = Utils.Input<'COMMON_TELEGRAM', string>;
  export type COMMON_DEADLINE = Utils.Input<'COMMON_DEADLINE', number>;

  export type COMMON_OFFER_MAKER_TYPES = Utils.Input<'COMMON_OFFER_MAKER_TYPES', Common.Enums.InvestorType[]>;
  export type COMMON_BID_MAKER_TYPES = Utils.Input<'COMMON_BID_MAKER_TYPES', Common.Enums.InvestorType[]>;
  export type COMMON_UNITS = Utils.Input<'COMMON_UNITS', string>;
  export type COMMON_SUMMARY = Utils.Input<'COMMON_SUMMARY', string>;
  export type COMMON_MIN_FILTER_UNITS = Utils.Input<'COMMON_MIN_FILTER_UNITS', string>;
  export type COMMON_MIN_FILTER_SUMMARY = Utils.Input<'COMMON_MIN_FILTER_SUMMARY', string>;

  export type INVEST_DOC_ASSET_PK = Utils.Input<'INVEST_DOC_ASSET_PK', string>;
  export type INVEST_DOC_ASSET_CREATE_REQUEST = Utils.Input<'INVEST_DOC_ASSET_CREATE_REQUEST', Lot.ValueObjects.AssetCreateRequest>;
  export type INVEST_DOC_WITH_REASSIGN = Utils.Input<'INVEST_DOC_WITH_REASSIGN', boolean>;
  export type INVEST_DOC_FDV = Utils.Input<'INVEST_DOC_FDV', string>;
  export type INVEST_DOC_SHARE = Utils.Input<'INVEST_DOC_SHARE', number>;

  //  Только при SELL
  export type INVEST_DOC_ROUND_TYPE = Utils.Input<'INVEST_DOC_ROUND_TYPE', Common.Enums.InvestRound>;
  export type INVEST_DOC_ROUND_PRICE = Utils.Input<'INVEST_DOC_ROUND_PRICE', string>;
  export type INVEST_DOC_ROUND_UNITS = Utils.Input<'INVEST_DOC_ROUND_UNITS', string>;
  export type INVEST_DOC_ROUND_FDV = Utils.Input<'INVEST_DOC_ROUND_FDV', string>;
  export type INVEST_DOC_ROUND_SHARE = Utils.Input<'INVEST_DOC_ROUND_SHARE', number>;
  export type INVEST_DOC_ROUND_SUMMARY = Utils.Input<'INVEST_DOC_ROUND_SUMMARY', string>;

  export type SAFE_WITH_TOKEN_WARRANT = Utils.Input<'SAFE_WITH_TOKEN_WARRANT', boolean>;

  export type TOKEN_TGE = Utils.Input<'TOKEN_TGE', number | 'TBD'>;
  export type TOKEN_LOCKUP_PERIOD = Utils.Input<'TOKEN_LOCKUP_PERIOD', (string & {}) | 'OVER'>;
  export type TOKEN_VESTING_PERIOD = Utils.Input<'TOKEN_VESTING_PERIOD', string>;
}
