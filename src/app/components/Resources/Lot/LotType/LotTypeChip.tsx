import { useMemo } from 'react';

import { Text, TextProps } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { LotTypeColorMap, LotTypeTitleMap } from './const';

export interface LotTypeChipProps extends TextProps {
  value: Resource.Lot.LotType;
}

export function LotTypeChip({ value, ...textProps }: LotTypeChipProps) {
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
      {...textProps}
    >
      {title}
    </Text>
  );
}
