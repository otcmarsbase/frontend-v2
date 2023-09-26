import { useMemo } from 'react';

import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { DealStatusColorMap, DealStatusTitleMap } from './const';

export interface DealStatusProps extends BoxProps {
  value: Resource.Deal.Enums.DealStatus;
}

export const DealStatus = ({ value, ...boxProps }: DealStatusProps): JSX.Element => {
  const color = useMemo(() => DealStatusColorMap.get(value), [value]);
  const title = useMemo(() => DealStatusTitleMap.get(value), [value]);

  return (
    <HStack {...boxProps} gap="0.25rem">
      <Circle size="0.5rem" bg={color} />
      <Text color={color} fontSize="sm" fontWeight={500} lineHeight="1.5rem">
        {title}
      </Text>
    </HStack>
  );
};