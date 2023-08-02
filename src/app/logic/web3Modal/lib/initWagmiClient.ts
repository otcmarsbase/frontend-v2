import { w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

const chains = [arbitrum, mainnet, polygon];
const projectId = '9b92039e6b468106fda4a11fb8864260';
export function initWagmiClient() {
  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  return createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
}
