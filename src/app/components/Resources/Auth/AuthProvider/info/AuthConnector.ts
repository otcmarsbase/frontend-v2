import { createDictionary } from '@app/dictionary';
import { WindowProvider } from 'wagmi';
import { Connector } from 'wagmi/connectors';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import metamaskLogo from './assets/metamask.png';
import { AuthChainDictionary } from './AuthChain';

export const AuthConnectorType = ['metamask', 'wallet-connect'] as const;
export type AuthConnectorType = (typeof AuthConnectorType)[number];

export interface AuthConnectorInfo {
  type: AuthConnectorType;
  title: string;
  description: string;

  logoUrl: string;
  installUrl?: string;
  supportUrl: string;
  wagmiConnector: Connector;
  isInstalled: (ethereum?: WindowProvider) => boolean;
}

export const AuthConnectorDictionary = createDictionary<AuthConnectorType, AuthConnectorInfo>();

AuthConnectorDictionary.set('metamask', {
  type: 'metamask',
  title: 'Metamask',
  description: 'One of the most secure wallets with great flexibility',
  logoUrl: metamaskLogo,
  installUrl: 'https://metamask.io/download/',
  supportUrl: 'https://support.metamask.io/hc/en-us/articles/360015489531',
  wagmiConnector: new MetaMaskConnector({ chains: AuthChainDictionary.map((m) => m.wagmi).values() }),
  isInstalled: (ethereum?: WindowProvider) => ethereum?.isMetaMask,
});

// if (AppConfig.wagmi.projectId) {
//   AuthConnectorDictionary.set('wallet-connect', {
//     type: 'wallet-connect',
//     title: 'Wallet Connect',
//     description: 'The open source web3 standard to connect blockchain wallets to dapps',
//     logoUrl: walletConnectLogo,
//     supportUrl: 'https://support.metamask.io/hc/en-us/articles/360015489531',
//     wagmiConnector: new WalletConnectConnector({
//       options: {
//         projectId: AppConfig.wagmi.projectId,
//         qrModalOptions: { themeMode: 'dark', themeVariables: { '--wcm-z-index': '9999' } },
//       },
//       chains: AuthChainDictionary.map((m) => m.wagmi).values(),
//     }),
//     isInstalled: () => false,
//   });
// }
