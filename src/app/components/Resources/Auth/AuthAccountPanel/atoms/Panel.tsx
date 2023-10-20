import { useMemo } from 'react';

import { formatAddress, formatNumber } from '@app/utils';
import { HStack, Circle, Box, Image, Text } from '@chakra-ui/react';

import { AuthConnectorInfo } from '../../AuthProvider';

export interface PanelProps {
  connectorInfo: AuthConnectorInfo;
  nickname: string;

  balance: string;
  decimals: number;
  symbol: string;
  onSignOut: () => any;
}

export function Panel({ connectorInfo, nickname, balance, decimals, symbol, onSignOut }: PanelProps) {
  const formattedBalance = useMemo(
    () => balance && formatNumber(balance, decimals <= 4 ? decimals : 4),
    [balance, decimals],
  );
  const formattedNickname = useMemo(() => nickname && formatAddress(nickname, 8, 4), [nickname]);

  return (
    <Box borderRadius="base" bg="dark.800" padding="0.4rem" paddingLeft="0.6rem" userSelect="none">
      <HStack>
        <Circle size="1.125rem">
          <Image w="1.05rem" src={connectorInfo.logoUrl} alt={connectorInfo.title} />
        </Circle>
        <Text fontSize="sm" color="orange.500" whiteSpace="nowrap" fontWeight={600}>
          {formattedBalance} {symbol}
        </Text>
        <Text fontSize="sm" color="gray" bg="#0E0913" padding="0.2rem 0.5rem" borderRadius="base">
          {formattedNickname}
        </Text>
      </HStack>
    </Box>
  );
}
