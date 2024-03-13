import { useMemo } from 'react';

import { resolveTradeDirection } from '@app/utils';
import { Text, TextProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { TradeDirectionBackgroundColorMap, TradeDirectionTitleMap } from './const';

export interface TradeDirectionChipProps extends TextProps {
  value: DeskGatewaySchema.TradeDirection;
  reverse?: boolean;
}

export function TradeDirectionChip({ value, reverse, ...textProps }: TradeDirectionChipProps) {
  const innerValue = useMemo(() => resolveTradeDirection(value, reverse), [reverse, value]);

  const backgroundColor = useMemo(() => TradeDirectionBackgroundColorMap.get(innerValue), [innerValue]);
  const title = useMemo(() => TradeDirectionTitleMap.get(innerValue), [innerValue]);

  return (
    <Text
      padding="0.125rem 0.5rem"
      borderRadius="6.25rem"
      fontSize="2xs"
      color="white"
      fontWeight="600"
      textTransform="uppercase"
      bg={backgroundColor}
      whiteSpace="nowrap"
      {...textProps}
    >
      {title}
    </Text>
  );
}
