import { useMemo } from 'react';

import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { BidStatusInfoDictionary } from './const';

export interface BidStatusProps extends BoxProps {
  value: Resource.Bid.BidStatus;
}

export function BidStatus({ value, ...boxProps }: BidStatusProps) {
  const info = useMemo(() => BidStatusInfoDictionary.get(value), [value]);

  return (
    <HStack {...boxProps} gap="0.25rem">
      <Circle size="0.5rem" bg={info.color} />
      <Text color={info.color} fontSize="sm" fontWeight={500} lineHeight="1.5rem">
        {info.title}
      </Text>
    </HStack>
  );
}
