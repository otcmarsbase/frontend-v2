import { WagmiConfig } from 'wagmi';

import { AuthContext } from './context/AuthContext';
import { IAuthContext } from './interfaces';
import { initWagmiClient } from './utils';

export interface WalletConnectProviderProps extends IAuthContext {
  children: React.ReactNode;
}

export function WalletConnectProvider({ children, ...context }: WalletConnectProviderProps) {
  const wagmiConfig = initWagmiClient();
  return (
    <AuthContext.Provider value={context}>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
    </AuthContext.Provider>
  );
}
