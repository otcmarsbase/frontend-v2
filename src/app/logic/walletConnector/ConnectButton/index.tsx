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
  const { userEntityStore } = useStore();

  const { isConnected, address, connector } = useAccount({
    onConnect: () => console.log('metamask connected'),
    onDisconnect: () => userEntityStore.clearAuthMeta(),
  });

  const { disconnect } = useDisconnect();

  const { isLoading } = useConnect({
    onError: () => console.error('connection error'),
  });

  const { data } = useBalance({
    address,
  });

  const handleToggleConnection = async () => {
    if (!isLoading && isConnected) {
      disconnect();
    } else {
      const successConnection = await ModalController.create(
        ChooseWalletConnectorModal,
        {},
      );
      if (successConnection) {
        const publicKey = await ModalController.create(SignWalletModal, {
          // Тут получаем подпись с бэка
          getMessage: () =>
            new Promise<string>((resolve) => {
              setTimeout(() => {
                resolve('blablabla');
              }, 500);
            }),
        });
        // Получив publicKey, отправляем его на бэк для получения токена
        if (publicKey) {
          const { token, expires } = await new Promise<{
            token: string;
            expires: number;
          }>((resolve) => {
            setTimeout(() => {
              resolve({ token: 'asasasasasas', expires: 12121 });
            }, 500);
          });
          userEntityStore.setAuthMeta(token, expires);
        }
      }
    }
  };

  const balanceWithCommas = formatNumber(Number(data?.formatted));
  const formattedAddress = formatAddress(address);

  const connectorName = connector?.name as WalletConnectorName;

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
