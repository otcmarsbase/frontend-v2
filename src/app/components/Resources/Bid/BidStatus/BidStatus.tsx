import { useMemo } from 'react';

import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { BidStatusColorMap, BidStatusTitleMap } from './const';

export interface BidStatusProps extends BoxProps {
  value: Resource.Bid.BidStatus;
}

export function BidStatus({ value, ...boxProps }: BidStatusProps) {
  const color = useMemo(() => BidStatusColorMap.get(value), [value]);
  const title = useMemo(() => BidStatusTitleMap.get(value), [value]);

  return (
    <HStack {...boxProps} gap="0.25rem">
      <Circle size="0.5rem" bg={color} />
      <Text color={color} fontSize="sm" fontWeight={500} lineHeight="1.5rem">
        {title}
      </Text>
    </HStack>
  );
}
