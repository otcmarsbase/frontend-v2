import { useMemo } from 'react';

import { Text, TextProps } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { TradeDirectionBackgroundColorMap, TradeDirectionColorMap, TradeDirectionTitleMap } from './const';

export interface TradeDirectionTextProps extends TextProps {
  value: Resource.Common.TradeDirection;
}

export function TradeDirectionText({ value }: TradeDirectionTextProps) {
  const backgroundColor = useMemo(() => TradeDirectionBackgroundColorMap.get(value), [value]);
  const color = useMemo(() => TradeDirectionColorMap.get(value), [value]);
  const title = useMemo(() => TradeDirectionTitleMap.get(value), [value]);

  return (
    <Text
      bg={backgroundColor}
      padding="0.1rem 1rem"
      borderRadius="0.75rem 0rem"
      color={color}
      textTransform="uppercase"
      fontSize="sm"
      fontWeight={600}
    >
      {title}
    </Text>
  );
}
