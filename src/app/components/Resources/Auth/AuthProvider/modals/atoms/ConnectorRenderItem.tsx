import { useMemo } from 'react';

import { Box, Divider, HStack, Image, Link, VStack, Text } from '@chakra-ui/react';

import { AuthConnectorsType, IAuthConnectorInfo } from '../../info/AuthConnectorInfo';

export interface ConnectorRenderItemProps {
  authConnector: IAuthConnectorInfo;
  onClick: (connectorType: string) => any;
}

export function ConnectorRenderItem({ authConnector, onClick }: ConnectorRenderItemProps) {
  const isInstalled = useMemo(() => {
    if (authConnector.isInstalled) {
      return authConnector.isInstalled();
    }
    return true;
  }, [authConnector]);

  return (
    <Box layerStyle="grayRadiiArea" cursor="pointer" onClick={() => onClick(authConnector.type)}>
      <HStack width="full" justifyContent="space-between">
        <Image w="1.5rem" src={authConnector.logoUrl} />
        {authConnector.isInstalled && (
          <HStack gap="0.75rem">
            <Link
              color="orange.500"
              fontSize="sm"
              _hover={{ textDecoration: 'none' }}
              target="_blank"
              href={authConnector.supportUrl}
              onClickCapture={(e) => e.stopPropagation()}
            >
              How it works
            </Link>
            {isInstalled ? (
              <>
                <Divider borderColor="orange.500" h="1rem" orientation="vertical" />
                <Text color="orange.500" fontSize="sm">
                  Installed
                </Text>
              </>
            ) : (
              authConnector.installUrl && (
                <>
                  <Divider borderColor="orange.500" h="1rem" orientation="vertical" />
                  <Link
                    color="orange.500"
                    fontSize="sm"
                    _hover={{ textDecoration: 'none' }}
                    target="_blank"
                    href={authConnector.installUrl}
                  >
                    Install
                  </Link>
                </>
              )
            )}
          </HStack>
        )}
      </HStack>
      <VStack mt="1rem" w="full" alignItems="start" gap="0.1rem">
        <Text fontWeight={600}>{authConnector.title}</Text>
        <Text fontSize="sm" color="dark.50">
          {authConnector.description}
        </Text>
      </VStack>
    </Box>
  );
}
