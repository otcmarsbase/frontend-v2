import { Asset } from '../../Asset';
import { Common } from '../../Common';
import { Lot } from '../Lot';

import { LotBase } from './Abstract';
import { LotCommon } from './LotCommon';

export namespace LotAsset {
  export type Draft = LotCommon.Draft & {
    assetPK: Asset.AssetKey | Lot.ValueObjects.AssetCreateRequest;
    withReassign?: boolean;
    contractSize?: Common.Finances.ContractSize;
    minimumDealSize?: Common.Finances.TicketQuantity;
  } & LotBase.LotDirectionModel<
      {},
      { investRound?: Common.Enums.InvestRound; roundContractSize?: Common.Finances.ContractSize }
    >;

  export type OnModeration = LotCommon.OnModeration & {
    assetPK: Asset.AssetKey | Lot.ValueObjects.AssetCreateRequest;
    withReassign: boolean;
    contractSize: Common.Finances.ContractSize;
    minimumDealSize?: Common.Finances.TicketQuantity;
  } & LotBase.LotDirectionModel<
      {},
      { investRound?: Common.Enums.InvestRound; roundContractSize?: Common.Finances.ContractSize }
    >;

  export type Active = LotCommon.Active & {
    assetPK: Asset.AssetKey;
    withReassign: boolean;
    contractSize: Common.Finances.ContractSize;
    minimumDealSize?: Common.Finances.TicketQuantity;

    executed: Common.Finances.TicketQuantity;
    reserved: Common.Finances.TicketQuantity;
    available: Common.Finances.TicketQuantity;
  } & LotBase.LotDirectionModel<
      {},
      { investRound: Common.Enums.InvestRound; roundContractSize: Common.Finances.ContractSize }
    >;

  export type Completed = LotCommon.Completed & {
    assetPK: Asset.AssetKey;
    withReassign: boolean;
    contractSize: Common.Finances.ContractSize;
    minimumDealSize?: Common.Finances.TicketQuantity;

    executed: Common.Finances.TicketQuantity;
    reserved: Common.Finances.TicketQuantity;
    available: Common.Finances.TicketQuantity;
  } & LotBase.LotDirectionModel<
      {},
      { investRound: Common.Enums.InvestRound; roundContractSize: Common.Finances.ContractSize }
    >;
}
