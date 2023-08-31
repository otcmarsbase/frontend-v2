import { Spinner, VStack, Text } from '@chakra-ui/react';

import { AuthConnectorDictionary, AuthConnectorType } from '../../AuthProvider';

import { ConnectorRenderItem } from './ConnectorRenderItem';

export interface SelectConnectorProps {
  isLoading: boolean;
  onConnectorClick: (type: AuthConnectorType) => any;
}

export function SelectConnector({ isLoading, onConnectorClick }: SelectConnectorProps) {
  return (
    <VStack position="relative">
      {AuthConnectorDictionary.keys().map((connectorType) => (
        <ConnectorRenderItem
          key={connectorType}
          authConnectorInfo={AuthConnectorDictionary.get(connectorType)}
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
  );
}
