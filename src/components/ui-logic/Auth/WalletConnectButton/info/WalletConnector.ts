import { ResponsiveValue, ThemeTypings } from '@chakra-ui/react';
import { createDictionary } from '@components/dictionary';
import { mainnet } from 'wagmi';
import { Connector } from 'wagmi/connectors';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import metamaskLogo from './assets/metamask-logo.png';

export const WalletConnectorType = ['metamask'] as const;
export type WalletConnectorType = (typeof WalletConnectorType)[number];

export interface WalletConnectorInfo {
  title: string;
  description: string;

  color: ResponsiveValue<ThemeTypings['colors']>;
  logoUrl: string;
  installUrl: string;
  supportUrl: string;
  connectors: Connector[];
}

export const WalletConnectorDictionary = createDictionary<WalletConnectorType, WalletConnectorInfo>({
  metamask: {
    title: 'Metamask',
    description: 'One of the most secure wallets with great flexibility',
    color: 'rgba(232, 130, 30, 0.20)',
    logoUrl: metamaskLogo,
    installUrl: 'https://metamask.io/download/',
    supportUrl: 'https://support.metamask.io/hc/en-us/articles/360015489531',
    connectors: [new MetaMaskConnector({ chains: [mainnet] }), new InjectedConnector({ chains: [mainnet] })],
  },
});
