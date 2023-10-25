import { Resource } from '@schema/desk-gateway';
import { Property } from 'csstype';

// TODO: Уточнить у дизайнеров почему цвета не из той палитры
export const TradeDirectionBackgroundColorMap = new Map<Resource.Common.Enums.TradeDirection, Property.Color>([
  ['BUY', 'rgba(52, 168, 83, 0.40)'],
  ['SELL', 'rgba(232, 42, 54, 0.30)'],
]);

export const TradeDirectionColorMap = new Map<Resource.Common.Enums.TradeDirection, Property.Color>([
  ['BUY', '#34A853'],
  ['SELL', '#E82A36'],
]);

export const TradeDirectionTitleMap = new Map<Resource.Common.Enums.TradeDirection, React.ReactNode>([
  ['BUY', 'Buy'],
  ['SELL', 'Sell'],
]);
