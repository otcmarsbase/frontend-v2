import { Fragment, useCallback } from 'react';

import { useRPCSchema } from '@app/hooks';
import { ModalController } from '@app/logic';
import { Button } from '@chakra-ui/react';
import { useLoadingCallback } from '@shared/ui-kit';
import { useAccount, useConnect, useSignMessage } from 'wagmi';

import { WalletConnectorDictionary } from './info';
import { WalletConnectorSelectModal, WalletConnectorSignModal } from './modals';

export interface WalletConnectButtonProps {
  children?: React.ReactNode;
}

export function WalletConnectButton({ children }: WalletConnectButtonProps) {
  const schema = useRPCSchema();

  const onConnect = useCallback(() => {}, []);
  const onDisconnect = useCallback(() => {}, []);

  const { connectAsync } = useConnect();
  const { signMessageAsync } = useSignMessage();

  const { isConnected } = useAccount({
    onConnect,
    onDisconnect,
  });

  const onSignIn = useCallback(
    async (address: string) => {
      const generatedMessage = await schema.send('auth.generateMessage', {
        address,
        domain: 'otcmarsbase.io',
        uri: 'https://otcmarsbase.io/',
      });
      const signature = await signMessageAsync({ message: generatedMessage.message });

      console.log(generatedMessage.message, signature);
      await schema.send('auth.signIn', {
        message: generatedMessage.message,
        signatureHash: generatedMessage.signature_hash,
        signature,
      });
    },
    [schema, signMessageAsync],
  );

  const onClickConnect = useLoadingCallback(
    useCallback(async () => {
      const connectorType = await ModalController.create(WalletConnectorSelectModal, {});
      if (!connectorType) return void 0;

      const walletConnectorInfo = WalletConnectorDictionary.get(connectorType);
      if (!walletConnectorInfo) return void 0;

      await ModalController.create(WalletConnectorSignModal, {
        onSignIn: async () => {
          const connectResult = await connectAsync({ connector: walletConnectorInfo.connectors[0] });
          onSignIn(connectResult.account);
        },
      });
    }, [connectAsync, onSignIn]),
  );

  // const { connect, isLoading } = useConnect({
  //   onSuccess: (data) => portal.resolve(data.connector),
  //   onError: () => console.error('connection error'),
  // });

  // const onClose = useCallback(() => {
  //   if (portal?.resolve) portal.resolve(null);
  // }, [portal]);

  // const onConnectorClick = useCallback(
  //   (connectorName: WalletConnectorType) => {
  //     if (portal?.resolve) {
  //       const walletConnectorInfo = WalletConnectorDictionary.get(connectorName);
  //       connect({ connector: walletConnectorInfo.connectors[0] });
  //     }
  //   },
  //   [connect, portal],
  // );

  if (isConnected) return <Fragment>{children}</Fragment>;

  return (
    <Button variant="brand" isLoading={onClickConnect.isLoading} onClick={onClickConnect}>
      Connect wallet
    </Button>
  );
}
