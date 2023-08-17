export enum IInvAccType {
  INDIVIDUAL = 'Individual',
  VC = 'VC',
  HEDGE_FUND = 'Hedge Fund',
  FAMILY_OFFICE = 'Family Office',
  DAO = 'DAO',
}
export type TInvAccType =
  | 'Individual'
  | 'VC'
  | 'Hedge Fund'
  | 'Family Office'
  | 'DAO';
export const InvAccTypes: IInvAccType[] = [
  IInvAccType.INDIVIDUAL,
  IInvAccType.VC,
  IInvAccType.HEDGE_FUND,
  IInvAccType.FAMILY_OFFICE,
  IInvAccType.DAO,
];
export type TLotType = 'SAFE' | 'SAFT' | 'Token warrant';
export enum ELotType {
  SAFE = 'SAFE',
  SAFT = 'SAFT',
  TOKEN_WARRANT = 'Token warrant',
}
export const LotTypes = [ELotType.SAFE, ELotType.SAFT, ELotType.TOKEN_WARRANT];
