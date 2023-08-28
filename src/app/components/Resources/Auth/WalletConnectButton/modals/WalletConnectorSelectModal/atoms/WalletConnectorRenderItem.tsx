import { useMemo } from 'react';

import { Box, Divider, HStack, Image, Link, VStack, Text } from '@chakra-ui/react';

import { WalletConnectorDictionary, WalletConnectorType } from '../../../info';

export interface WalletConnectorRenderItemProps {
  type: WalletConnectorType;
  onClick: () => any;
}

export function WalletConnectorRenderItem({ type, onClick }: WalletConnectorRenderItemProps) {
  const connectorInfo = useMemo(() => WalletConnectorDictionary.get(type), [type]);

  const isInstalled = useMemo(() => {
    if (!window.ethereum) return false;
    if (type === 'metamask') return window.ethereum['isMetaMask'];

    return false;
  }, [type]);

  return (
    <Box layerStyle="grayRadiiArea" cursor="pointer" onClick={onClick}>
      <HStack width="full" justifyContent="space-between">
        <Image w="1.5rem" src={connectorInfo.logoUrl} />
        <HStack gap="0.75rem">
          <Link
            color="orange.500"
            fontSize="sm"
            _hover={{ textDecoration: 'none' }}
            target="_blank"
            href={connectorInfo.supportUrl}
          >
            How it works
          </Link>
          {!isInstalled && (
            <>
              <Divider borderColor="orange.500" h="1rem" orientation="vertical" />
              <Link
                color="orange.500"
                fontSize="sm"
                _hover={{ textDecoration: 'none' }}
                target="_blank"
                href={connectorInfo.installUrl}
              >
                Install
              </Link>
            </>
          )}
        </HStack>
      </HStack>
      <VStack mt="1rem" w="full" alignItems="start" gap="0.1rem">
        <Text fontWeight={600}>{connectorInfo.title}</Text>
        <Text fontSize="sm" color="dark.50">
          {connectorInfo.description}
        </Text>
      </VStack>
    </Box>
  );
}
