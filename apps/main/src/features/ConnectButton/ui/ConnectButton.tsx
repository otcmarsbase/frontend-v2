import {Button} from "@/components";
import {observer} from "mobx-react-lite";
import {useStore} from "@/stores";
import {Connector, useAccount, useBalance, useConnect, useDisconnect} from "wagmi";
import './index.scss'
import {ConnectButtonProps} from "@/features/ConnectButton/types";
import {IExtensionAccount} from "@/widgets/web3modal/types";
import {chakra} from '@chakra-ui/react'
import {ConnectingBtn} from "@/features/ConnectButton/ui/ConnectingBtn";
import {ConnectedWalletBtn} from "@/features/ConnectButton/ui/ConnectWalletBtn";
import {DisconnectedWalletBtn} from "@/features/ConnectButton/ui/DisconnectWalletBtn";

export const ConnectButton = observer(({className}: ConnectButtonProps) => {
  const {web3ConnectStore} = useStore();

  const currentExtensionState: IExtensionAccount = useAccount({
    onConnect: () => web3ConnectStore.setExtensionState(currentExtensionState),
    onDisconnect: () => web3ConnectStore.setExtensionState(undefined)
  });
  const {disconnect} = useDisconnect();
  const {connect, connectors, isLoading} = useConnect(
    {
      onError: () => console.log('connection error')
    });
  const {data} = useBalance(
    {
      address: currentExtensionState.address
    })
  const handleToggleConnection = (): void => {
//TODO здесь по нажатию надо выводить модалку со всеми возможными валлетами
    if(!isLoading && currentExtensionState.isConnected){
      disconnect();
    }else{
      connectors.forEach((connector: Connector) => {
        console.log(connector.name, connector.name === 'MetaMask')
        if (connector.name === 'MetaMask') {
          connect({connector});
        } else {
          console.log('you need to install metamask')
        }
      })
    }
  }

  return (
    <Button className={'ConnectButton'} onClick={handleToggleConnection} children={
      <chakra.div>
        {isLoading ? <ConnectingBtn/> : null}
        {!isLoading
          ?
          <>{currentExtensionState.isConnected ?
            <ConnectedWalletBtn
              address={currentExtensionState.address}
              data={data}
            />
            :
            <DisconnectedWalletBtn/>
          }
          </>
          : null}
      </chakra.div>
    }
    />
  )
})
