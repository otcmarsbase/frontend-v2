export namespace Common {
  export type Direction = 'BUY' | 'SELL';

  export type AccountType =
    | 'INDIVIDUAL'
    | 'VC'
    | 'HEDGE_FUND'
    | 'FAMILY_OFFICE'
    | 'DAO';

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
}
