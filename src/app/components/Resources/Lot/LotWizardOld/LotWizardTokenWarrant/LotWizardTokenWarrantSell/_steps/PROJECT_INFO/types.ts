import { Resource } from '@schema/otc-desk-gateway';

export type ProjectInfoModel = {
  isDirect: boolean;
  isReadyToSPV: boolean;
  isNoLimit: boolean;
  isPermanent: boolean;
  offerMakerType: Resource.Common.Enums.InvestorType;
  bidderType: Resource.Common.Enums.InvestorType[] | null;
  telegram: string;
  deadline: Date;
};
