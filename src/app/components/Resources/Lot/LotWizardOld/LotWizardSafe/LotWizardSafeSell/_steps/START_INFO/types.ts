import { Resource } from '@schema/desk-gateway';

export type StartInfoModel = {
  asset: Resource.Asset.Asset | string;
  direction: Resource.Common.Enums.TradeDirection;
  type: Resource.Lot.Enums.LotType;
  isReassigned: boolean;
  withTokenWarrant: boolean;
  website: string | null;
};
