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

export enum LotType {
  SAFE = 'SAFE',
  SAFT = 'SAFT',
  TOKEN_WARRANT = 'TOKEN_WARRANT',
}

export const LotTypesTexts = {
  [LotType.SAFE]: 'SAFE',
  [LotType.SAFT]: 'SAFT',
  [LotType.TOKEN_WARRANT]: 'Token warrant',
};

export const LotTypes = [LotType.SAFE, LotType.SAFT, LotType.TOKEN_WARRANT];
