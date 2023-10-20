import { Common } from '../Common';
import { Lot } from './Lot';

export namespace LotAttributes {
  export namespace Utils {
    export type Attribute<Name extends string, Value> = {
      [Key in Name]: Value;
    };

    type _MergeAttributes<T extends Attribute<any, any>[]> = T extends [infer I, ...infer U]
      ? I & (U extends [] ? {} : _MergeAttributes<U>)
      : {};

    export type MergeAttributes<T extends Attribute<any, any>[]> = {
      [Key in keyof _MergeAttributes<T> & string as `${Key}`]?: _MergeAttributes<T>[Key];
    };
  }

  export type COMMON_CREATED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_CREATED_AT_ATTRIBUTE', number>;
  export type COMMON_SEND_ON_MODERATION_AT_ATTRIBUTE = Utils.Attribute<
    'COMMON_SEND_ON_MODERATION_AT_ATTRIBUTE',
    number
  >;
  export type COMMON_PUBLISHED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_PUBLISHED_AT_ATTRIBUTE', number>;
  export type COMMON_ARCHIVED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_ARCHIVED_AT_ATTRIBUTE', number>;
  export type COMMON_COMPLETED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_COMPLETED_AT_ATTRIBUTE', number>;
  export type COMMON_COMPLETED_REASON_ATTRIBUTE = Utils.Attribute<'COMMON_COMPLETED_REASON_ATTRIBUTE', Lot.Enums.LotCompletedReasonType>;
  export type COMMON_REJECTED_AT_ATTRIBUTE = Utils.Attribute<'COMMON_REJECTED_AT_ATTRIBUTE', number>;
  export type COMMON_REJECT_REASON_ATTRIBUTE = Utils.Attribute<'COMMON_REJECT_REASON_ATTRIBUTE', string>;

  // CUSTOM
  export type COMMON_MEDIATOR = Utils.Attribute<'COMMON_MEDIATOR', Common.Enums.MediatorType>;
}
