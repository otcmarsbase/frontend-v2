export namespace LotFlow {
  export type LotId = number;

  export type LotType = 'SAFE' | 'SAFT' | 'TOKEN_WARRANT';

  export type PricingModel =
    | 'IN_STABLECOIN'
    | 'IN_TOKEN_SHARES'
    | 'IN_TOKEN'
    | 'IN_EQUITY';
}
