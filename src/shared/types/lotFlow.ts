export namespace LotFlow {
  export type LotId = number;

  export enum LotType {
    SAFE = 'SAFE',
    SAFT = 'SAFT',
    TOKEN_WARRANT = 'TOKEN_WARRANT',
  }

  export enum TypeOfDeal {
    BUY = 'BUY',
    SELL = 'SELL',
  }
}
