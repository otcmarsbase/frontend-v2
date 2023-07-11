import {WagmiConfig} from 'wagmi'
import {ConnectButton} from "@/features/ConnectButton";
import {initWagmiClient} from "@/widgets/web3modal/lib/initWagmiClient";
export const Web3ModalComponent = () => {
  const wagmiConfig = initWagmiClient()
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ConnectButton/>
      </WagmiConfig>
    </>
  )
}

