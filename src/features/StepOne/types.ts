import { ReactNode } from 'react';
export const enum IInvAccType {
  INDIVIDUAL = 'Individual',
  VC = 'VC',
  HEDGE_FUND = 'Hedge Fund',
  FAMILY_OFFICE = 'Family Office',
  DAO = 'DAO',
}
export const InvAccTypes: IInvAccType[] = [
  IInvAccType.INDIVIDUAL,
  IInvAccType.VC,
  IInvAccType.HEDGE_FUND,
  IInvAccType.FAMILY_OFFICE,
  IInvAccType.DAO,
];
export type ProjectInfoShemaTypes =
  | 'project_name'
  | 'project_website'
  | 'lot_type'
  | 'telegram'
  | 'is_re_assigned'
  | 'is_direct_seller'
  | 'is_adm_to_buy'
  | 'is_data_picker_disabled'
  | 'is_token_warrant'
  | 'types_of_seller'
  | 'types_of_buyer'
  | 'deadline_date';

export enum ILotType {
  SAFE = 'SAFE',
  SAFT = 'SAFT',
  TOKEN_WARRANT = 'Token Warrant',
}
export const LotTypes = [ILotType.SAFE, ILotType.SAFT, ILotType.TOKEN_WARRANT];
