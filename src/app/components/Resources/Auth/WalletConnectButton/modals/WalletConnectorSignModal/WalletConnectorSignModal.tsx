import { useCallback } from 'react';

import { VStack, Text, Circle, HStack, Button, Spinner } from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { UIIcons } from '@shared/ui-icons';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';

export interface WalletConnectorSignModalProps extends PortalProps<void> {
  // address: string;
  onSignIn: () => Promise<void>;
}

export function WalletConnectorSignModal({ portal, onSignIn }: WalletConnectorSignModalProps) {
  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(null);
  }, [portal]);

  const onVerifyClick = useLoadingCallback(
    useCallback(async () => {
      await onSignIn();
      onClose();
    }, [onSignIn, onClose]),
  );

  return (
    <UIKit.Modal
      variant="brand"
      title={
        <Text fontSize="2md" color="white" textTransform="uppercase" fontFamily="promo">
          Link your wallet
        </Text>
      }
      description={
        <Text color="dark.50" fontSize="sm" fontWeight={400} w="91%">
          You will receive two signature requests. The signature is free and does not send a transaction.
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      maxW="30rem"
    >
      <VStack gap="1.25rem">
        <HStack layerStyle="grayRadiiArea" gap="1rem">
          <Circle size="3rem" bg="dark.300" position="relative">
            <UIIcons.Common.LinkWalletIcon color={onVerifyClick.isLoading ? 'orange.500' : 'white'} opacity="0.5" />
            {onVerifyClick.isLoading && (
              <Spinner color="orange.500" size="3rem" position="absolute" top="0" right="0" bottom="0" left="0" />
            )}
          </Circle>
          <VStack alignItems="start" gap="0.25rem">
            <Text fontWeight={600}>Link wallet</Text>
            <Text color="dark.50" fontSize="sm">
              Verify that you are the owner of this wallet
            </Text>
          </VStack>
        </HStack>
        <Button
          isDisabled={onVerifyClick.isLoading}
          isLoading={onVerifyClick.isLoading}
          size="lg"
          variant="brand"
          w="full"
          onClick={onVerifyClick}
        >
          Verify
        </Button>
      </VStack>
    </UIKit.Modal>
  );
}
