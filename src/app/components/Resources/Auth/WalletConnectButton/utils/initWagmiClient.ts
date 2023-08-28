import LINQ from '@berish/linq';
import { AppConfig } from '@shared/config';
import { w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { WalletChainDictionary, WalletConnectorDictionary } from '../info';

export function initWagmiClient() {
  const projectId = AppConfig.wagmi.projectId;
  const walletWagmiChains = WalletChainDictionary.map((m) => m.wagmiInfo)
    .values()
    .slice();

  const { publicClient, webSocketPublicClient } = configureChains(walletWagmiChains, [w3mProvider({ projectId })]);

  const walletWagmiConnectors = LINQ.from(
    WalletConnectorDictionary.map((m) => m.connectors)
      .values()
      .slice(),
  )
    .selectMany((m) => m)
    .toArray();

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [...walletWagmiConnectors],
  });

  return config;
}
