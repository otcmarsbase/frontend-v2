import {memo} from "react";
import {ConnectedWalletBtnProps} from "@/features/ConnectButton/types";
import {formatNumber} from "@/features/ConnectButton/lib/formatNumber";
import {formatAddress} from "@/features/ConnectButton/lib/formatAddress";
import {chakra} from "@chakra-ui/react";

export const ConnectedWalletBtn= memo(({address, data}: ConnectedWalletBtnProps) => {
  if (!data || !data.formatted) return null;

  const {formatted} = data;

  const balanceWithCommas = formatNumber(Number(formatted));
  const formattedAddress = formatAddress(address);

  return (
    <chakra.div className={'ConnectedWalletBtnInner'}>
      <chakra.div>
        {balanceWithCommas} {data?.symbol}
      </chakra.div>
      <chakra.div marginLeft='5'>{formattedAddress ? formattedAddress : ''}</chakra.div>
    </chakra.div>
  )
})
