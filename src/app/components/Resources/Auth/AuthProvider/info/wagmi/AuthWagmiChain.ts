import { createDictionary } from '@app/dictionary';
import { Chain, mainnet } from 'wagmi/chains';

export const AuthChainType = ['mainnet'] as const;
export type AuthChainType = (typeof AuthChainType)[number];

export interface AuthChainInfo {
  wagmi: Chain;
}

export const AuthChainDictionary = createDictionary<AuthChainType, AuthChainInfo>({
  mainnet: {
    wagmi: mainnet,
  },
});
