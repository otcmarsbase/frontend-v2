import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';

import { createDictionary } from '../utils';

export interface TradeDirectionDictionaryInfo {
  title: string;
  createOfferModal: {
    icon: ComponentWithAs<'svg', IconProps>;
    actionLabel: string;
  };
}

export const TradeDirectionDictionary = createDictionary<
  DeskGatewaySchema.TradeDirection,
  TradeDirectionDictionaryInfo
>({
  BUY: {
    title: 'Buy',
    createOfferModal: {
      icon: UIIcons.Common.DirectionIcon,
      actionLabel: 'I want to buy',
    },
  },
  SELL: {
    title: 'Sell',
    createOfferModal: {
      icon: UIIcons.Common.DirectionIcon,
      actionLabel: 'I want to sell',
    },
  },
});
