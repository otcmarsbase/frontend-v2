import { useMemo } from 'react';

import {
  Box,
  Divider,
  HStack,
  Image,
  Link,
  VStack,
  Text,
} from '@chakra-ui/react';

import { WalletConnectorInfoItems } from '../../const';
import { WalletConnectorType } from '../../types';

export interface WalletConnectorRenderItemProps {
  type: WalletConnectorType;
  onClick: () => any;
}

export function WalletConnectorRenderItem({
  type,
  onClick,
}: WalletConnectorRenderItemProps) {
  const isInstalled = useMemo(() => {
    if (!window.ethereum) return false;
    if (type === 'metamask') return window.ethereum['isMetaMask'];

    return false;
  }, [type]);

  const infoItem = useMemo(
    () => WalletConnectorInfoItems.find((m) => m.type === type),
    [type],
  );

  return (
    <Box layerStyle="grayRadiiArea" cursor="pointer" onClick={onClick}>
      <HStack width="full" justifyContent="space-between">
        <Image w="1.5rem" src={infoItem.logo} />
        <HStack gap="0.75rem">
          <Link
            color="orange.500"
            fontSize="sm"
            _hover={{ textDecoration: 'none' }}
            target="_blank"
            href={infoItem.supportUrl}
          >
            How it works
          </Link>
          {!isInstalled && (
            <>
              <Divider
                borderColor="orange.500"
                h="1rem"
                orientation="vertical"
              />
              <Link
                color="orange.500"
                fontSize="sm"
                _hover={{ textDecoration: 'none' }}
                target="_blank"
                href={infoItem.installUrl}
              >
                Install
              </Link>
            </>
          )}
        </HStack>
      </HStack>
      <VStack mt="1rem" w="full" alignItems="start" gap="0.1rem">
        <Text fontWeight={600}>{infoItem.title}</Text>
        <Text fontSize="sm" color="dark.50">
          {infoItem.description}
        </Text>
      </VStack>
    </Box>
  );
}
