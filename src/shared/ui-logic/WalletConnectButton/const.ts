import MetaMaskLogoPng from '@shared/assets/metaMask.png';

import { WalletConnectorInfo } from './types';

export const WalletConnectorInfoItems: WalletConnectorInfo[] = [
  {
    type: 'metamask',
    title: 'Metamask',
    description: 'One of the most secure wallets with great flexibility',
    logo: MetaMaskLogoPng,
    installUrl: 'https://metamask.io/download/',
    supportUrl: 'https://support.metamask.io/hc/en-us/articles/360015489531',
  },
];
