import { useCallback } from 'react';

import { VStack, Text, Spinner } from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { UIKit } from '@shared/ui-kit';
import { useConnect } from 'wagmi';

import { WalletConnectorType } from '../../info';

import { WalletConnectorRenderItem } from './atoms';

export interface WalletConnectorSelectModalProps extends PortalProps<WalletConnectorType> {}

export function WalletConnectorSelectModal({ portal }: WalletConnectorSelectModalProps) {
  const { isLoading } = useConnect();

  const onClose = useCallback(() => {
    if (portal?.resolve) portal.resolve(null);
  }, [portal]);

  const onConnectorClick = useCallback(
    (connectorName: WalletConnectorType) => {
      if (portal?.resolve) {
        portal.resolve(connectorName);
      }
    },
    [portal],
  );

  return (
    <UIKit.Modal
      title={
        <Text fontSize="2md" color="white" fontFamily="promo">
          Connect wallet
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      variant="brand"
      maxW="30rem"
    >
      <VStack position="relative">
        {WalletConnectorType.map((connectorType) => (
          <WalletConnectorRenderItem
            key={connectorType}
            type={connectorType}
            onClick={() => onConnectorClick(connectorType)}
          />
        ))}
        {isLoading && (
          <VStack
            position="absolute"
            backdropFilter="blur(0.4rem)"
            bg="rgba(11, 11, 11, 0.60)"
            top="0"
            right="0"
            bottom="0"
            left="0"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner color="orange.500" />
            <Text fontWeight={600}>Connecting</Text>
            <Text fontSize="sm" color="dark.50">
              Please wait for the wallet connection
            </Text>
          </VStack>
        )}
      </VStack>
    </UIKit.Modal>
  );
}
