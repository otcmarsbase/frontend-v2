import { useMemo } from 'react';

import { resolveTradeDirection } from '@app/utils';
import { Text, TextProps } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { TradeDirectionBackgroundColorMap, TradeDirectionColorMap, TradeDirectionTitleMap } from './const';

export interface TradeDirectionTextProps extends Omit<TextProps, 'invert'> {
  value: Resource.Common.Enums.TradeDirection;
  variant?: 'leaf' | 'ghost';
  invert?: boolean;
  reverse?: boolean;
}

export function TradeDirectionText({
  value,
  variant = 'leaf',
  invert,
  reverse,
  ...textProps
}: TradeDirectionTextProps) {
  const innerValue = useMemo(() => resolveTradeDirection(value, reverse), [reverse, value]);

  const backgroundColor = useMemo(() => TradeDirectionBackgroundColorMap.get(innerValue), [innerValue]);
  const color = useMemo(() => TradeDirectionColorMap.get(innerValue), [innerValue]);
  const title = useMemo(() => TradeDirectionTitleMap.get(innerValue), [innerValue]);

  return (
    <Text
      bg={variant === 'leaf' ? backgroundColor : 'transparent'}
      padding={variant === 'leaf' ? '0.1rem 1rem' : '0'}
      borderRadius={invert ? '0rem 0.75rem' : '0.75rem 0rem'}
      color={color}
      textTransform="uppercase"
      fontSize="sm"
      fontWeight={600}
      {...textProps}
    >
      {title}
    </Text>
  );
}
