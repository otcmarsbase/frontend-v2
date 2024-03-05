import { useMemo } from 'react';

import { LotStatusDictionary } from '@app/dictionary';
import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface LotStatusProps extends BoxProps {
  value: DeskGatewaySchema.LotStatus;
}

export function LotStatus({ value, ...boxProps }: LotStatusProps) {
  const { color, title } = useMemo(() => LotStatusDictionary.get(value), [value]);

  return (
    <HStack {...boxProps} gap="0.25rem">
      <Circle size="0.5rem" bg={color} />
      <Text color={color} fontSize="sm" fontWeight={500} lineHeight="1.5rem">
        {title}
      </Text>
    </HStack>
  );
}
