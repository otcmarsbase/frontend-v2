import { LotAbstract, LotBase } from './Abstract';
import { LotAsset } from './LotAsset';

export namespace LotSAFE {
  export type State = LotAbstract.LotState<Draft, OnModeration, Active, Completed, LotBase.LotArchviedModel<Draft, OnModeration>, LotBase.LotRejectedModel<OnModeration, Active>>;

  export type Draft = LotAsset.Draft & { withTokenWarrant?: boolean };
  export type OnModeration = LotAsset.OnModeration & { withTokenWarrant: boolean };
  export type Active = LotAsset.Active & { withTokenWarrant: boolean };
  export type Completed = LotAsset.Completed & { withTokenWarrant: boolean };
}
