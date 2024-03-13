import { DeskGatewaySchema } from '@schema/desk-gateway';

export function resolveTradeDirection(direction: DeskGatewaySchema.TradeDirection, reverse = false) {
  if (!reverse) return direction;

  return direction === 'BUY' ? 'SELL' : 'BUY';
}
