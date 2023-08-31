import { useMemo } from 'react';

import { Box, Divider, HStack, Image, Link, VStack, Text } from '@chakra-ui/react';

import { AuthConnectorInfo } from '../../AuthProvider';

// import { WalletConnectorDictionary, WalletConnectorType } from '../../../info';

export interface ConnectorRenderItemProps {
  authConnectorInfo: AuthConnectorInfo;
  onClick: () => any;
}

export function ConnectorRenderItem({ authConnectorInfo, onClick }: ConnectorRenderItemProps) {
  const isInstalled = useMemo(() => {
    return authConnectorInfo.isInstalled(window.ethereum);
  }, [authConnectorInfo]);

  return (
    <Box layerStyle="grayRadiiArea" cursor="pointer" onClick={onClick}>
      <HStack width="full" justifyContent="space-between">
        <Image w="1.5rem" src={authConnectorInfo.logoUrl} />
        <HStack gap="0.75rem">
          <Link
            color="orange.500"
            fontSize="sm"
            _hover={{ textDecoration: 'none' }}
            target="_blank"
            href={authConnectorInfo.supportUrl}
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
            authConnectorInfo.installUrl && (
              <>
                <Divider borderColor="orange.500" h="1rem" orientation="vertical" />
                <Link
                  color="orange.500"
                  fontSize="sm"
                  _hover={{ textDecoration: 'none' }}
                  target="_blank"
                  href={authConnectorInfo.installUrl}
                >
                  Install
                </Link>
              </>
            )
          )}
        </HStack>
      </HStack>
      <VStack mt="1rem" w="full" alignItems="start" gap="0.1rem">
        <Text fontWeight={600}>{authConnectorInfo.title}</Text>
        <Text fontSize="sm" color="dark.50">
          {authConnectorInfo.description}
        </Text>
      </VStack>
    </Box>
  );
}
