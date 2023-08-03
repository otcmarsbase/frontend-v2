import { Button, chakra } from '@chakra-ui/react';
import {
  Connector,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
} from 'wagmi';
import { ConnectingBtn } from './ConnectingBtn';
import { ConnectedWalletBtn } from './ConnectWalletBtn';
import { DisconnectedWalletBtn } from './DisconnectBtn';
import './index.scss';

export const ConnectBtn = () => {
  const currentExtensionState = useAccount({
    onConnect: () => console.log('metamask connected'),
    onDisconnect: () => console.log('metamask disconnected'),
  });
  const { disconnect } = useDisconnect();
  const { connect, connectors, isLoading } = useConnect({
    onError: () => console.error('connection error'),
  });
  const { data } = useBalance({
    address: currentExtensionState.address,
  });
  const handleToggleConnection = (): void => {
    //TODO здесь по нажатию надо выводить модалку со всеми возможными валлетами
    if (!isLoading && currentExtensionState.isConnected) {
      disconnect();
    } else {
      connectors.forEach((connector: Connector) => {
        console.log(connector.name, connector.name === 'MetaMask');
        if (connector.name === 'MetaMask') {
          connect({ connector });
        } else {
          console.log('you need to install metamask');
        }
      });
    }
  };

  return (
    <Button
      className={'ConnectBtn'}
      onClick={handleToggleConnection}
      children={
        <chakra.div>
          {isLoading ? <ConnectingBtn /> : null}
          {!isLoading ? (
            <>
              {currentExtensionState.isConnected ? (
                <ConnectedWalletBtn
                  address={currentExtensionState.address}
                  data={data}
                />
              ) : (
                <DisconnectedWalletBtn />
              )}
            </>
          ) : null}
        </chakra.div>
      }
    />
  );
};
