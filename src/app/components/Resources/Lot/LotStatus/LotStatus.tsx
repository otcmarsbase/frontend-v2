import { useMemo } from 'react';

import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { LotStatusColorMap, LotStatusTitleMap } from './const';

export interface LotStatusProps extends BoxProps {
  value: Resource.Lot.LotStatus;
}

export function LotStatus({ value, ...boxProps }: LotStatusProps) {
  const color = useMemo(() => LotStatusColorMap.get(value), [value]);
  const title = useMemo(() => LotStatusTitleMap.get(value), [value]);

  return (
    <HStack {...boxProps} gap="0.25rem">
      <Circle size="0.5rem" bg={color} />
      <Text color={color} fontSize="sm" fontWeight={500} lineHeight="1.5rem">
        {title}
      </Text>
    </HStack>
  );
}
