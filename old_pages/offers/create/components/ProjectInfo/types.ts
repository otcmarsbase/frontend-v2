import { Common, LotFlow } from '@shared/types';

export const AccountTypes: Record<Common.AccountType, string> = {
  INDIVIDUAL: 'Individual',
  VC: 'VC',
  HEDGE_FUND: 'Hedge Fund',
  FAMILY_OFFICE: 'Family Office',
  DAO: 'DAO',
};

export const AccountTypesKeys = Object.keys(
  AccountTypes,
) as Common.AccountType[];

export const LotTypes: Record<LotFlow.LotType, string> = {
  SAFE: 'SAFE',
  SAFT: 'SAFT',
  TOKEN_WARRANT: 'Token warrant',
};

export const LotTypesKeys = Object.keys(AccountTypes) as LotFlow.LotType[];
