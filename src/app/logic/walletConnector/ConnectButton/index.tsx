import { useCallback, useEffect, useState } from 'react';

import { useRPCSchema } from '@app/hooks';
import { ModalController } from '@app/logic/modal';
import { ChooseWalletConnectorModal } from '@app/modals';
import { SignWalletModal } from '@app/modals';
import { useStore } from '@app/store';
import {
  Box,
  Button,
  Image,
  Circle,
  HStack,
  Text,
  ColorProps,
} from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import MetaMaskLogoPng from '@shared/assets/metaMask.png';
import { WalletConnectorName } from '@shared/types';
import { formatAddress, formatNumber } from '@shared/utils';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';

const connectorIcons: Record<WalletConnectorName, string> = {
  MetaMask: MetaMaskLogoPng,
};

const connectorColors: Record<WalletConnectorName, ColorProps['color']> = {
  MetaMask: 'rgba(232, 130, 30, 0.20)',
};

export const WalletConnectButton = () => {
  const schema = useRPCSchema();
  const [message, setMessage] =
    useState<Resource.Auth.AuthGeneratedMessage>(null);
  const { authLocalStore } = useStore();

  const { isConnected, address, connector } = useAccount({
    onConnect: () => console.log('metamask connected'),
    onDisconnect: () => (authLocalStore.authToken = null),
  });

  const { disconnect } = useDisconnect();

  const { isLoading } = useConnect({
    onError: () => console.error('connection error'),
  });

  const { data } = useBalance({
    address,
  });

  const handleToggleConnection = useCallback(async () => {
    if (!isLoading && isConnected) {
      disconnect();
    } else {
      await ModalController.create(ChooseWalletConnectorModal, {});
    }
  }, [message, address, isLoading, isConnected]);

  const balanceWithCommas = formatNumber(Number(data?.formatted));
  const formattedAddress = formatAddress(address);

  const connectorName = connector?.name as WalletConnectorName;

  const fetchSignature = async (address: string) => {
    const generatedMessage = await schema.send('auth.generateMessage', {
      domain: window.location.host,
      uri: window.location.origin,
      address,
    });
    const signature = await ModalController.create(SignWalletModal, {
      message: generatedMessage.message,
    });
    if (signature) {
      await schema.send('auth.signIn', {
        message: generatedMessage.message,
        signatureHash: generatedMessage.signature_hash,
        signature,
      });
    }
  };

  useEffect(() => {
    if (address) fetchSignature(address);
  }, [address]);

  return isConnected && data ? (
    <Box
      borderRadius="base"
      bg="dark.800"
      padding="0.4rem"
      paddingLeft="0.6rem"
      cursor="pointer"
      onClick={handleToggleConnection}
    >
      <HStack>
        <Circle size="1.125rem" bg={connectorColors[connectorName]}>
          <Image
            w="0.6rem"
            src={connectorIcons[connectorName]}
            alt={connectorName}
          />
        </Circle>
        <Text
          fontSize="sm"
          color="orange.500"
          whiteSpace="nowrap"
          fontWeight={600}
        >
          {balanceWithCommas} {data?.symbol}
        </Text>
        <Text
          fontSize="sm"
          color="gray"
          bg="#0E0913"
          padding="0.2rem 0.5rem"
          borderRadius="base"
        >
          {formattedAddress}
        </Text>
      </HStack>
    </Box>
  ) : (
    <Button
      variant="brand"
      isLoading={isLoading}
      onClick={handleToggleConnection}
    >
      Connect wallet
    </Button>
  );
};
