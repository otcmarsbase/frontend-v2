import { Button, Circle, FormErrorMessage, HStack, Spinner, Text, VStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

export interface AuthVerifyModalProps extends PortalProps<void> {
  onTryAgain?: () => any;
  error?: string;
}

export function AuthVerifyModal({ onTryAgain, error, portal }: AuthVerifyModalProps) {
  console.log('AuthVerifyModal', error);
  return (
    <UIKit.Modal
      title={
        <Text fontSize="2md" color="white" fontFamily="promo">
          Verify wallet
        </Text>
      }
      onClose={() => portal.resolve()}
      size="2xl"
      isCentered
      variant="brand"
      maxW="30rem"
    >
      <VStack width="full" gap="1.25rem">
        <HStack width="full" gap="1rem">
          <Circle size="3rem" bg="dark.300" position="relative">
            <UIIcons.Common.LinkWalletIcon color="white" opacity="0.5" />

            <Spinner color="orange.500" size="3rem" position="absolute" top="0" right="0" bottom="0" left="0" />
          </Circle>
          <VStack alignItems="start" gap="0.25rem">
            <Text fontWeight={600}>Link wallet</Text>
            <Text color="dark.50" fontSize="sm">
              Verify that you are the owner of this wallet
            </Text>
          </VStack>
        </HStack>
        {error && (
          <VStack width="full">
            <Text>{error}</Text>
            {onTryAgain && <Button onClick={onTryAgain}>Try again</Button>}
          </VStack>
        )}
      </VStack>
    </UIKit.Modal>
  );
}
