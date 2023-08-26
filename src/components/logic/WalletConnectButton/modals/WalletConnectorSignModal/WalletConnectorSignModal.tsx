import { useCallback } from 'react';

import { useRPCSchema } from '@app/hooks';
import {
  VStack,
  Text,
  Circle,
  HStack,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { LinkWalletIcon, Modal, useLoadingCallback } from '@shared/ui-kit';
import { useSignMessage } from 'wagmi';

export interface WalletConnectorSignModalProps extends PortalProps<void> {
  address: string;
}

export function WalletConnectorSignModal({
  portal,
  address,
}: WalletConnectorSignModalProps) {
  const schema = useRPCSchema();
  const { signMessageAsync } = useSignMessage();

  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(null);
  }, [portal]);

  const onAuthGenerateMessage = useCallback(
    () =>
      schema.send('auth.generateMessage', {
        domain: window.location.host,
        uri: window.location.origin,
        address,
      }),
    [schema, address],
  );

  const onAuthSignIn = useCallback(
    (message: string, signatureHash: string, signature: string) =>
      schema.send('auth.signIn', {
        message,
        signatureHash,
        signature,
      }),
    [schema],
  );

  const onVerifyClick = useLoadingCallback(
    useCallback(async () => {
      const generatedMessage = await onAuthGenerateMessage();
      const signature = await signMessageAsync({
        message: generatedMessage.message,
      });
      await onAuthSignIn(
        generatedMessage.message,
        generatedMessage.signature_hash,
        signature,
      );
      onClose();
    }, [onAuthGenerateMessage, signMessageAsync, onAuthSignIn, onClose]),
  );

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
              color={onVerifyClick.isLoading ? 'orange.500' : 'white'}
              opacity="0.5"
            />
            {onVerifyClick.isLoading && (
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
          isDisabled={onVerifyClick.isLoading}
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
}
