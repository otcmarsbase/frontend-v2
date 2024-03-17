import { Spinner, VStack, Text } from '@chakra-ui/react';

import { IAuthWagmiConnectorInfo } from '../../info';
import { AuthConnectorsDictionary } from '../../info/AuthConnectorInfo';

import { ConnectorRenderItem } from './ConnectorRenderItem';

export interface SelectConnectorProps {
  isLoading: boolean;
  onConnectorClick: (connectorType: string) => any;
}

export function SelectConnector({ isLoading, onConnectorClick }: SelectConnectorProps) {
  return (
    <VStack position="relative">
      {AuthConnectorsDictionary.keys().map((connectorType) => (
        <ConnectorRenderItem
          key={connectorType}
          authConnector={AuthConnectorsDictionary.get(connectorType) as IAuthWagmiConnectorInfo}
          onClick={onConnectorClick}
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
  );
}
