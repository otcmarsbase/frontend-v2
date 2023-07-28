import { WagmiConfig } from 'wagmi';
import { initWagmiClient } from '../lib/initWagmiClient';
import { ConnectBtn } from '../../ConnectButton';
export const Web3ModalComponent = () => {
  const wagmiConfig = initWagmiClient();
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ConnectBtn />
      </WagmiConfig>
    </>
  );
};

export {};
