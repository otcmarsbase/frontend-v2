import {FetchBalanceResult} from "@wagmi/core";

export interface ConnectButtonProps {
  className?: string,
}

export interface ConnectedWalletBtnProps {
  address: `0x${string}` | undefined,
  data: FetchBalanceResult | undefined
}



