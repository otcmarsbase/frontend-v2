// import {Connector, PublicClient, useAccount, useBalance, useConnect, useDisconnect} from "wagmi";
import './index.scss'
// import {Button, chakra} from '@chakra-ui/react'
// import {ConnectButtonProps} from "../types";
// import {ConnectingBtn} from "./ConnectingBtn";
// import {ConnectedWalletBtn} from "./ConnectWalletBtn";
// import {DisconnectedWalletBtn} from "./DisconnectBtn";
// import {observer} from "mobx-react-lite";

export const ConnectBtn = () => {
    // const {web3ConnectStore} = useStore();

    // const currentExtensionState = useAccount({
        // onConnect: () => web3ConnectStore.setExtensionState(currentExtensionState),
        // onDisconnect: () => web3ConnectStore.setExtensionState(undefined)
    // });
//     const {disconnect} = useDisconnect();
//     const {connect, connectors, isLoading} = useConnect(
//         {
//             onError: () => console.log('connection error')
//         });
//     const {data} = useBalance(
//         {
//             address: currentExtensionState.address
//         })
//     const handleToggleConnection = (): void => {
// //TODO здесь по нажатию надо выводить модалку со всеми возможными валлетами
//         if(!isLoading && currentExtensionState.isConnected){
//             disconnect();
//         }else{
//             connectors.forEach((connector: Connector) => {
//                 console.log(connector.name, connector.name === 'MetaMask')
//                 if (connector.name === 'MetaMask') {
//                     connect({connector});
//                 } else {
//                     console.log('you need to install metamask')
//                 }
//             })
//         }
//     }
//
//     return (
//         <Button className={'ConnectBtn'} onClick={handleToggleConnection} children={
//             <chakra.div>
//                 {isLoading ? <ConnectingBtn/> : null}
//                 {!isLoading
//                     ?
//                     <>{currentExtensionState.isConnected ?
//                         <ConnectedWalletBtn
//                             address={currentExtensionState.address}
//                             data={data}
//                         />
//                         :
//                         <DisconnectedWalletBtn/>
//                     }
//                     </>
//                     : null}
//             </chakra.div>
//         }
//         />
//     )
}
// )
