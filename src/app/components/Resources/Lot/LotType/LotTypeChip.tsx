import { useMemo } from 'react';

import { Text, TextProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { LotTypeColorMap, LotTypeTitleMap } from './const';

export interface LotTypeChipProps extends TextProps {
  value: DeskGatewaySchema.LotType;
  withTokenWarrant?: boolean;
}

export function LotTypeChip({ value, withTokenWarrant, ...textProps }: LotTypeChipProps) {
  const color = useMemo(() => LotTypeColorMap.get(value), [value]);
  const title = useMemo(() => LotTypeTitleMap.get(value), [value]);

  return (
    <Text
      padding="0.125rem 0.5rem"
      borderRadius="6.25rem"
      fontSize="2xs"
      color="white"
      fontWeight="600"
      bg={color}
      whiteSpace="nowrap"
      {...textProps}
    >
      {title}
      {withTokenWarrant && ` + ${LotTypeTitleMap.get('TOKEN_WARRANT')}`}
    </Text>
  );
}
