import { FC } from 'react';

import { VStack, Text } from '@chakra-ui/react';
import { Countdown } from '@shared/ui-kit';

import { useLotView } from '../../../useLotView';

export const Deadline: FC = () => {
  const { lot } = useLotView();

  if (!lot.attributes.COMMON_DEADLINE) return;

  return (
    <VStack gap="0.25rem" padding="0 0 0 1.5rem " flex="2" alignItems="flex-end">
      <Text fontSize="sm" color="dark.50">
        Auction ends in:
      </Text>

      <Countdown expiryTimestamp={new Date(lot.attributes.COMMON_DEADLINE)} />
    </VStack>
  );
};
