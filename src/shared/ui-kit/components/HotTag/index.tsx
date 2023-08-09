import { HStack, Text } from '@chakra-ui/react';
import { HotIcon } from '../../icons';

export const HotTag = () => {
  return (
    <HStack
      borderRadius="0.25rem"
      bg="rgba(207, 79, 41, 0.40)"
      padding="0.12rem 0.5rem"
      alignItems="center"
      gap="0.12rem"
      justifyContent="center"
    >
      <Text fontWeight="semibold" fontSize="2xs">
        HOT!
      </Text>
      <HotIcon w="0.75rem" h="0.75rem" />
    </HStack>
  );
};
