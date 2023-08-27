import { AppConfig } from '@app/config';
import { w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export function initWagmiClient() {
  const chains = [mainnet];
  const projectId = AppConfig.wagmi.projectId;

  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

  return createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
}
