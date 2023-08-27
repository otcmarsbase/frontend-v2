import { useCallback } from 'react';

import { useAccount, useDisconnect } from 'wagmi';

import { WalletConnectorType } from '../types';

export interface UseWalletConnectProps {
  onLogout?: () => any;
}
export interface UseWalletConnectResult {
  connected?: {
    connector: WalletConnectorType;
    address: string;
    balance: string;
  };
}

export function useWalletConnect({
  onLogout,
}: UseWalletConnectProps): UseWalletConnectResult {
  const onConnect = useCallback(() => {}, []);
  const onDisconnect = useCallback(() => {}, []);

  const { isConnected, address, connector } = useAccount({
    onConnect,
    onDisconnect,
  });

  const { disconnect } = useDisconnect();

  return {};
}
