import {
  Box,
  Divider,
  HStack,
  Image,
  Link,
  VStack,
  Text,
} from '@chakra-ui/react';
import MetaMaskLogoPng from '@shared/assets/metaMask.png';
import { WalletConnectorName } from '@shared/types';

interface ConnectorItemProps {
  connectorName: WalletConnectorName;
  onClick: () => void;
}

const connectorNameTexts: Record<
  WalletConnectorName,
  {
    name: string;
    description: string;
  }
> = {
  MetaMask: {
    name: 'MetaMask',
    description: 'One of the most secure wallets with great flexibility',
  },
};

const connectorNameImages: Record<WalletConnectorName, string> = {
  MetaMask: MetaMaskLogoPng,
};

export const ConnectorItem: React.FC<ConnectorItemProps> = ({
  connectorName,
  onClick,
}) => {
  const checkInstall = (connectorName: WalletConnectorName) => {
    if (connectorName === 'MetaMask') return window.ethereum['isMetaMask'];
  };

  return (
    <Box layerStyle="grayRadiiArea" cursor="pointer" onClick={onClick}>
      <HStack width="full" justifyContent="space-between">
        <Image w="1.5rem" src={connectorNameImages[connectorName]} />
        <HStack gap="0.75rem">
          <Link
            color="orange.500"
            fontSize="sm"
            _hover={{ textDecoration: 'none' }}
          >
            How it works
          </Link>
          {!checkInstall(connectorName) && (
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
              >
                Install
              </Link>
            </>
          )}
        </HStack>
      </HStack>
      <VStack mt="1rem" w="full" alignItems="start" gap="0.1rem">
        <Text fontWeight={600}>{connectorNameTexts[connectorName].name}</Text>
        <Text fontSize="sm" color="dark.50">
          {connectorNameTexts[connectorName].description}
        </Text>
      </VStack>
    </Box>
  );
};
