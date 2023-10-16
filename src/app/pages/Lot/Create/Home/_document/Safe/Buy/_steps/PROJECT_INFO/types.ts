import { Resource } from '@schema/otc-desk-gateway';

export type ProjectInfoModel = {
  isDirect: boolean;
  isReadyToSPV: boolean;
  isNoLimit: boolean;
  isPermanent: boolean;
  typeOfSeller: Resource.Common.Enums.InvestorType[];
  typeOfBuyer: Resource.Common.Enums.InvestorType | null;
  telegram: string;
  deadline: Date;
};
