export namespace Common {
  export const Location = ['RUSSIA', 'OAE'] as const;
  export type Location = (typeof Location)[number];

  export const RoundType = ['PRESALE', 'SEED'] as const;
  export type RoundType = (typeof RoundType)[number];

  export const TradeDirection = ['BUY', 'SELL'] as const;
  export type TradeDirection = (typeof TradeDirection)[number];

  export const ParticipantType = ['INDIVIDUAL', 'VC', 'HEDGE_FUND', 'FAMILY_OFFICE', 'DAO'] as const;
  export type ParticipantType = (typeof ParticipantType)[number];

  export const ParticipantTypeNoLimitFlag = 'NO_LIMIT' as const;
  export type ParticipantTypeNoLimitFlag = typeof ParticipantTypeNoLimitFlag;

  export interface UnitFullQuantity {
    asset: string; // in Unit
    quote: string; // in $
  }

  export interface ValuationInfo {
    fdv: Common.UnitFullQuantity; // All of Asset
    quantity: Common.UnitFullQuantity; // All of Contract
    price: string; // price = fdv_quantity.asset / fdv_quantity.quote
    share: string; // in percents (contract_quantity / fdv_quantity)
  }
}
