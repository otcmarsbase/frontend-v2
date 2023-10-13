import { Merge, PickEnum } from '@schema/common';

import { Common } from '../../../Common';
import { Lot } from '../../Lot';

export namespace LotBase {
  export type LotDirectionModel<BUY, SELL> = Merge<
    [
      { direction: PickEnum<Common.Enums.TradeDirection, 'BUY'> } & BUY,
      { direction: PickEnum<Common.Enums.TradeDirection, 'SELL'> } & SELL,
    ]
  >;

  export type LotTypeModel<T extends Lot.Enums.LotType, Model> = { type: T } & Model;

  export type LotArchviedModel<Draft, OnModeration> = (Draft | OnModeration) & { archivedAt: number };
  export type LotRejectedModel<OnModeration, Active> = (OnModeration | Active) & {
    rejectedAt: number;
    rejectReason: string;
  };
}
