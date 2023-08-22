export namespace Common {
  export const Location = ['RUSSIA', 'OAE'] as const;
  export type Location = (typeof Location)[number];

  export const RoundType = ['PRESALE', 'SEED'] as const;
  export type RoundType = (typeof RoundType)[number];

  export const TradeDirection = ['BUY', 'SELL'] as const;
  export type TradeDirection = (typeof TradeDirection)[number];

  export interface UnitFullQuantity {
    asset: string; // in Unit
    quote: string; // in $
  }
}
