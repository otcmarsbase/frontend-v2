import { useMemo } from 'react';

import { Text, TextProps } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { TradeDirectionBackgroundColorMap, TradeDirectionColorMap, TradeDirectionTitleMap } from './const';

export interface TradeDirectionTextProps extends Omit<TextProps, 'invert'> {
  value: Resource.Common.TradeDirection;
  variant?: 'leaf' | 'ghost';
  invert?: boolean;
}

export function TradeDirectionText({ value, variant = 'leaf', invert = true, ...textProps }: TradeDirectionTextProps) {
  const backgroundColor = useMemo(() => TradeDirectionBackgroundColorMap.get(value), [value]);
  const color = useMemo(() => TradeDirectionColorMap.get(value), [value]);
  const title = useMemo(() => TradeDirectionTitleMap.get(value), [value]);

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
