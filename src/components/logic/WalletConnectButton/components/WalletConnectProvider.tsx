import { PropsWithChildren } from 'react';

import { WagmiConfig } from 'wagmi';

import { initWagmiClient } from '../utils';

export function WalletConnectProvider({ children }: PropsWithChildren) {
  const wagmiConfig = initWagmiClient();
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
