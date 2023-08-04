import { memo, useCallback } from 'react';
import { VStack, Text, Spinner } from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { WalletConnectorName } from '@shared/types';
import { Modal } from '@shared/ui-kit';
import { useConnect } from 'wagmi';
import { ConnectorItem } from './components';

export interface ChooseWalletConnectorModalProps extends PortalProps<boolean> {}

const connectors: WalletConnectorName[] = ['MetaMask'];

export const ChooseWalletConnectorModal: React.FC<ChooseWalletConnectorModalProps> =
  memo(({ portal }) => {
    const {
      connect,
      connectors: wagmiConnectors,
      isLoading,
    } = useConnect({
      onSuccess: () => portal.resolve(true),
      onError: () => console.error('connection error'),
    });

    const onClose = useCallback(() => {
      if (portal && portal.resolve) portal.resolve(null);
    }, [portal]);

    const onConnectorClick = useCallback(
      (connectorName: WalletConnectorName) => {
        if (portal && portal.resolve) {
          const connector = wagmiConnectors.find(
            (connector) => connector.name === connectorName,
          );
          connect({ connector });
        }
      },
      [connect, portal, wagmiConnectors],
    );

    return (
      <Modal
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
          {connectors.map((connectorName) => (
            <ConnectorItem
              key={connectorName}
              onClick={() => onConnectorClick(connectorName)}
              connectorName={connectorName}
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
      </Modal>
    );
  });
