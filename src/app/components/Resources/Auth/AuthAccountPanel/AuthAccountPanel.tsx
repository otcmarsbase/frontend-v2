import { useBalance } from 'wagmi';

import { useAuth } from '../AuthProvider';

import { Panel } from './atoms';

export function AuthAccountPanel() {
  const { account, signOut, connectorInfo } = useAuth();
  const { data } = useBalance({ address: account.authData.walletAddress as `0x${string}` });

  return (
    <Panel
      connectorInfo={connectorInfo}
      nickname={account.nickname}
      onSignOut={signOut}
      balance={data?.formatted}
      decimals={data?.decimals}
      symbol={data?.symbol}
    />
  );
}
