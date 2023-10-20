import { Common } from '../../Common';
import { LotAbstract, LotBase } from './Abstract';
import { LotAsset } from './LotAsset';

export namespace LotTokenWarrant {
  export type State = LotAbstract.LotState<Draft, OnModeration, Active, Completed, LotBase.LotArchviedModel<Draft, OnModeration>, LotBase.LotRejectedModel<OnModeration, Active>>;

  export type Draft = LotAsset.Draft & LotBase.LotDirectionModel<{}, { tge?: Common.Dates.TGE; lockupPeriod?: Common.Text.LockupPeriod; vestingPeriod?: Common.Text.VestingPeriod }>;

  export type OnModeration = LotAsset.OnModeration & LotBase.LotDirectionModel<{}, { tge?: Common.Dates.TGE; lockupPeriod?: Common.Text.LockupPeriod; vestingPeriod?: Common.Text.VestingPeriod }>;

  export type Active = LotAsset.Active & LotBase.LotDirectionModel<{}, { tge?: Common.Dates.TGE; lockupPeriod?: Common.Text.LockupPeriod; vestingPeriod?: Common.Text.VestingPeriod }>;

  export type Completed = LotAsset.Completed & LotBase.LotDirectionModel<{}, { tge?: Common.Dates.TGE; lockupPeriod?: Common.Text.LockupPeriod; vestingPeriod?: Common.Text.VestingPeriod }>;
}
