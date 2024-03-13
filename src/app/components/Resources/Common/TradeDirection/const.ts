import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Property } from 'csstype';

// TODO: Уточнить у дизайнеров почему цвета не из той палитры
export const TradeDirectionBackgroundColorMap = new Map<DeskGatewaySchema.TradeDirection, Property.Color>([
  ['BUY', '#34A853'],
  ['SELL', '#E82A36'],
]);

export const TradeDirectionTitleMap = new Map<DeskGatewaySchema.TradeDirection, React.ReactNode>([
  ['BUY', 'Buy'],
  ['SELL', 'Sell'],
]);
