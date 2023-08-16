import { memo, useCallback, useState } from 'react';

import {
  VStack,
  Text,
  Circle,
  HStack,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { WalletConnectorName, WalletSignResult } from '@shared/types';
import { LinkWalletIcon, Modal } from '@shared/ui-kit';
import { useSignMessage } from 'wagmi';

export interface SignWalletModalProps extends PortalProps<WalletSignResult> {
  getMessage: () => Promise<string>;
}

export const SignWalletModal: React.FC<SignWalletModalProps> = memo(
  ({ portal, getMessage }) => {
    const onClose = useCallback(() => {
      if (portal && portal.resolve) portal.resolve(null);
    }, [portal]);

    const { isLoading, signMessage } = useSignMessage({
      onSuccess: (data) => portal.resolve(data),
    });

    const onVerifyClick = useCallback(async () => {
      if (portal && portal.resolve) {
        const message = await getMessage();
        signMessage({ message });
      }
    }, [getMessage, portal, signMessage]);

    return (
      <Modal
        variant="brand"
        title={
          <Text
            fontSize="2md"
            color="white"
            textTransform="uppercase"
            fontFamily="promo"
          >
            Link your wallet
          </Text>
        }
        description={
          <Text color="dark.50" fontSize="sm" fontWeight={400} w="91%">
            You will receive two signature requests. The signature is free and
            does not send a transaction.
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
              <LinkWalletIcon
                color={isLoading ? 'orange.500' : 'white'}
                opacity="0.5"
              />
              {isLoading && (
                <Spinner
                  color="orange.500"
                  size="3rem"
                  position="absolute"
                  top="0"
                  right="0"
                  bottom="0"
                  left="0"
                />
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
            isDisabled={isLoading}
            size="lg"
            variant="brand"
            w="full"
            onClick={onVerifyClick}
          >
            Verify
          </Button>
        </VStack>
      </Modal>
    );
  },
);
