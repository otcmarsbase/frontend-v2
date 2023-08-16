import { Heading, HStack } from '@chakra-ui/react';
import { HotIcon } from '@shared/ui-kit';

export const HotChip = () => {
  return (
    <HStack
      textTransform="uppercase"
      padding="0.125rem 0.5rem"
      borderRadius="0.25rem"
      bg="rgba(207, 79, 41, 0.40)"
    >
      <Heading variant="h6">HOT!</Heading>
      <HotIcon w="0.75rem" h="0.75rem" />
    </HStack>
  );
};
