import { createDictionary } from '@app/dictionary';
import { WindowProvider } from 'wagmi';
import { Connector } from 'wagmi/connectors';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import { AuthWagmiConnector } from '../../connectors';
import { IAuthConnectorInfo } from '../AuthConnectorInfo';

import metamaskLogo from './assets/metamask.png';
import { AuthChainDictionary } from './AuthWagmiChain';

export const AuthWagmiConnectorType = ['metamask'] as const;

export type AuthWagmiConnectorType = (typeof AuthWagmiConnectorType)[number];

export interface IAuthWagmiConnectorInfo extends IAuthConnectorInfo {
  type: AuthWagmiConnectorType;
  wagmiConnector: Connector;
  isInstalled: (ethereum?: WindowProvider) => boolean;
}

export const AuthWagmiConnectorDictionary = createDictionary<AuthWagmiConnectorType, IAuthWagmiConnectorInfo>();

AuthWagmiConnectorDictionary.set('metamask', {
  type: 'metamask',
  title: 'Metamask',
  description: 'One of the most secure wallets with great flexibility',
  logoUrl: metamaskLogo,
  installUrl: 'https://metamask.io/download/',
  supportUrl: 'https://support.metamask.io/hc/en-us/articles/360015489531',
  wagmiConnector: new MetaMaskConnector({ chains: AuthChainDictionary.map((m) => m.wagmi).values() }),
  isInstalled: () => (window as unknown as WindowProvider)?.isMetaMask,
  getConnector: () => new AuthWagmiConnector('metamask'),
});
