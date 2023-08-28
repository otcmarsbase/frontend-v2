import { createDictionary } from '@components/dictionary';
import { Chain, mainnet } from 'wagmi/chains';

export const WalletChainType = ['mainnet'] as const;
export type WalletChainType = (typeof WalletChainType)[number];

export interface WalletChainInfo {
  wagmiInfo: Chain;
}

export const WalletChainDictionary = createDictionary<WalletChainType, WalletChainInfo>({
  mainnet: {
    wagmiInfo: mainnet,
  },
});
