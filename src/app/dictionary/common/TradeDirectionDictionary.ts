import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
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
  Resource.Common.Enums.TradeDirection,
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
