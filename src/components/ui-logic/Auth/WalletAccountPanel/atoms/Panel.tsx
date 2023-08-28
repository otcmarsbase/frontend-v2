import { useMemo } from 'react';

import { HStack, Circle, Box, Image, Text } from '@chakra-ui/react';
import { formatAddress, formatNumber } from '@components/utils';

import { WalletConnectorInfo } from '../../WalletConnectButton';

export interface PanelProps {
  connectorInfo: WalletConnectorInfo;
  address: string;
  balance: string;
  decimals: number;
  symbol: string;
  onDisconnect: () => any;
}

export function Panel({ connectorInfo, address, balance, decimals, symbol, onDisconnect }: PanelProps) {
  const formattedBalance = useMemo(() => balance && formatNumber(balance, decimals), [balance, decimals]);
  const formattedAddress = useMemo(() => address && formatAddress(address), [address]);

  return (
    <Box
      borderRadius="base"
      bg="dark.800"
      padding="0.4rem"
      paddingLeft="0.6rem"
      cursor="pointer"
      onClick={onDisconnect}
    >
      <HStack>
        <Circle size="1.125rem" bg={connectorInfo.color}>
          <Image w="0.6rem" src={connectorInfo.logoUrl} alt={connectorInfo.title} />
        </Circle>
        <Text fontSize="sm" color="orange.500" whiteSpace="nowrap" fontWeight={600}>
          {formattedBalance} {symbol}
        </Text>
        <Text fontSize="sm" color="gray" bg="#0E0913" padding="0.2rem 0.5rem" borderRadius="base">
          {formattedAddress}
        </Text>
      </HStack>
    </Box>
  );
}
