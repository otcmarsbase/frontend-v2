import { VStack, HStack, Circle, Spinner, Button, Text } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface VerifyMessageProps {}

export function VerifyMessage({}: VerifyMessageProps) {
  return (
    <VStack width="full" gap="1.25rem">
      <HStack width="full" gap="1rem">
        <Circle size="3rem" bg="dark.300" position="relative">
          <UIIcons.Common.LinkWalletIcon color="orange.500" opacity="0.5" />

          <Spinner color="orange.500" size="3rem" position="absolute" top="0" right="0" bottom="0" left="0" />
        </Circle>
        <VStack alignItems="start" gap="0.25rem">
          <Text fontWeight={600}>Link wallet</Text>
          <Text color="dark.50" fontSize="sm">
            Verify that you are the owner of this wallet
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
