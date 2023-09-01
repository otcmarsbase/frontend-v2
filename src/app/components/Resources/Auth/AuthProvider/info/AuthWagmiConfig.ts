import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { AuthChainDictionary } from './AuthChain';
import { AuthConnectorDictionary } from './AuthConnector';

const { publicClient, webSocketPublicClient } = configureChains(
  AuthChainDictionary.map((m) => m.wagmi)
    .values()
    .filter(Boolean),
  [publicProvider()],
);

export const AuthWagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: AuthConnectorDictionary.map((m) => m.wagmiConnector).values(),
});
