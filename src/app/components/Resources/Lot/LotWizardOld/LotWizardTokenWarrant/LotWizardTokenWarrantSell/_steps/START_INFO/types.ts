import { Resource } from '@schema/otc-desk-gateway';

export type StartInfoModel = {
  asset: Resource.Asset.Asset | string;
  direction: Resource.Common.Enums.TradeDirection;
  type: Resource.Lot.Enums.LotType;
  isReassigned: boolean;
  website: string | null;
};
