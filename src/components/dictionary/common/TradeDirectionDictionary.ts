import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { UIIcons } from '@components/icons';
import { Resource } from '@schema/api-gateway';

import { createDictionary } from '../utils';

export interface TradeDirectionDictionaryInfo {
  createOfferModal: {
    icon: ComponentWithAs<'svg', IconProps>;
    actionLabel: string;
  };
}

export const TradeDirectionDictionary = createDictionary<Resource.Common.TradeDirection, TradeDirectionDictionaryInfo>({
  BUY: {
    createOfferModal: {
      icon: UIIcons.Common.DirectionIcon,
      actionLabel: 'I want to buy',
    },
  },
  SELL: {
    createOfferModal: {
      icon: UIIcons.Common.DirectionIcon,
      actionLabel: 'I want to sell',
    },
  },
});
