import { Fragment, PropsWithChildren, useEffect, useState } from 'react';

import { Text } from '@chakra-ui/react';
import { WagmiConfig } from 'wagmi';

import { AuthWagmiConfig } from './info';
import { AuthStore } from './stores';

export interface AuthProviderProps extends PropsWithChildren {}

export function AuthProvider({ children }: AuthProviderProps) {
  useEffect(() => {
    const authStore = AuthStore.getStore();
    authStore.start();
  }, []);

  return (
    <Fragment>
      <WagmiConfig config={AuthWagmiConfig}>{children}</WagmiConfig>
    </Fragment>
  );
}
