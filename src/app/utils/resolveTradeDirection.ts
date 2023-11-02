import { Resource } from '@schema/desk-gateway';

export function resolveTradeDirection(direction: Resource.Common.Enums.TradeDirection, reverse = false) {
  if (!reverse) return direction;

  return direction === 'BUY' ? 'SELL' : 'BUY';
}
