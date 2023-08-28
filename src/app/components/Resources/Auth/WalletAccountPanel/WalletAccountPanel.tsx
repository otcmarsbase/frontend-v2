import { useCallback, useMemo } from 'react';

import { useAccount, useBalance, useDisconnect } from 'wagmi';

import { WalletConnectButton, WalletConnectorDictionary } from '../WalletConnectButton';

import { Panel } from './atoms';

export interface WalletAccountPanelProps {}

export function WalletAccountPanel() {
  const { connector, address } = useAccount();
  const { disconnect } = useDisconnect();
  const balance = useBalance();

  const onDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const connectorInfo = useMemo(() => {
    if (!connector) return null;

    const walletConnectorDictionaryEntry = WalletConnectorDictionary.entries().find(
      ([key, info]) => info.connectors.indexOf(connector) !== -1,
    );

    return walletConnectorDictionaryEntry?.[1];
  }, [connector]);

  if (!connectorInfo) return <WalletConnectButton />;

  return (
    <Panel
      connectorInfo={connectorInfo}
      address={address}
      onDisconnect={onDisconnect}
      balance={balance.data?.formatted}
      decimals={balance.data?.decimals}
      symbol={balance.data?.symbol}
    />
  );
}
