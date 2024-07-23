import { Fragment, PropsWithChildren } from 'react';

import { WagmiConfig } from 'wagmi';

import { AuthWagmiConfig } from './info';

export interface AuthProviderProps extends PropsWithChildren {}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <Fragment>
      <WagmiConfig config={AuthWagmiConfig}>{children}</WagmiConfig>
    </Fragment>
  );
}
