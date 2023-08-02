import { FetchBalanceResult } from '@wagmi/core';

export interface ConnectedWalletBtnProps {
  address: `0x${string}` | undefined;
  data: FetchBalanceResult | undefined;
}
export interface IExtensionAccount {
  onConnect: () => {};
  onDisconnect: () => {};
}
