import {
  ELotType,
  IInvAccType,
} from '../ProjectInfo/types';

export const ProjectInfoFields = {
  PROJECT_NAME: 'Project Name',
  PROJECT_WEBSITE: 'Project Website',
  LOT_TYPE: 'Type of lot',
  TELEGRAM: 'Telegram',
  IS_RE_ASSIGNED: 'Re-Assign',
  IS_DIRECT_SELLER: 'I am direct seller',
  NO_LIMITATIONS: 'No limitations',
  IS_PERMANENT: 'Permanent',
  IS_TOKEN_WARRANT: '+ Token warrant',
  TYPES_OF_SELLER: 'Type of seller',
  TYPES_OF_BUYER: 'Type of buyer',
  DEADLINE_DATE: 'Deadline',
  IS_READY_TO_SVP: 'Ready to SPV',
  NO_LIMITATION: 'No limitation',
};

export const LotTypes = [ELotType.SAFE, ELotType.SAFT, ELotType.TOKEN_WARRANT];
export const InvAccTypes: IInvAccType[] = [
  IInvAccType.INDIVIDUAL,
  IInvAccType.VC,
  IInvAccType.HEDGE_FUND,
  IInvAccType.FAMILY_OFFICE,
  IInvAccType.DAO,
];
