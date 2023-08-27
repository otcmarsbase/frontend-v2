import { useCallback } from 'react';

import { ModalController } from '@app/logic';
import { Button } from '@chakra-ui/react';
import { useLoadingCallback, useRPCSchema } from '@components/hooks';
import { useAccount, useDisconnect } from 'wagmi';

// import { useRPCSchema } from '../../../../app/hooks';
import { WalletConnectorSelectModal } from './modals';

export interface WalletConnectButtonProps {
  children?: React.ReactNode;
}

export function WalletConnectButton({ children }: WalletConnectButtonProps) {
  const schema = useRPCSchema();
  const onConnect = useCallback(() => {}, []);
  const onDisconnect = useCallback(() => {}, []);

  const accountResult = useAccount({
    onConnect,
    onDisconnect,
  });

  const disconnectResult = useDisconnect();

  const onClickConnect = useLoadingCallback(
    useCallback(async () => {
      const connectorType = await ModalController.create(WalletConnectorSelectModal, {});
    }, []),
  );

  return (
    <Button variant="brand" isLoading={onClickConnect.isLoading} onClick={onClickConnect}>
      Connect wallet
    </Button>
  );
}
