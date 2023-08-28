import { useMemo } from 'react';

import { TradeDirectionDictionary } from '@app/dictionary';
import { Circle, HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface DirectionButtonProps {
  direction: Resource.Common.TradeDirection;
  onClick: () => any;
}

export function DirectionButton({ direction, onClick }: DirectionButtonProps) {
  const tradeDirectionDictionaryInfo = useMemo(
    () => TradeDirectionDictionary.map((m) => m.createOfferModal).get(direction),
    [direction],
  );

  return (
    <HStack
      w="full"
      p="1.25rem 1.5rem"
      borderRadius="0.75rem"
      cursor="pointer"
      onClick={onClick}
      gap="0.6rem"
      transition="all 0.3s"
      bg={{}}
      _hover={{
        bg: direction === 'SELL' ? 'red.400' : 'green.400',
      }}
    >
      <Circle size="2.5rem" bg={direction === 'SELL' ? 'red.500' : 'green.500'}>
        <tradeDirectionDictionaryInfo.icon color="white" />
      </Circle>
      <Text fontWeight={600}>{tradeDirectionDictionaryInfo.actionLabel}</Text>
    </HStack>
  );
}
