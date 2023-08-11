import { AppConfig } from '@shared/config';
import { w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

export function initWagmiClient() {
  const chains = [arbitrum, mainnet, polygon];
  const projectId = AppConfig.wagmi.projectId;

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);

  return createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
}

export const WalletProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const wagmiConfig = initWagmiClient();
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};
