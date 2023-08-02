import {ConnectedWalletBtnProps} from "@app/logic/web3Modal/ConnectButton/types";
import { Box } from '@chakra-ui/react';
import { formatAddress, formatNumber } from '@shared/lib/utils';


export const ConnectedWalletBtn = ({
  address,
  data,
}: ConnectedWalletBtnProps) => {
  if (!data || !data.formatted) return null;

  const { formatted } = data;

  const balanceWithCommas = formatNumber(Number(formatted));
  const formattedAddress = formatAddress(address);

  return (
    <Box className={'ConnectedWalletBtnInner'}>
      <Box>
        {balanceWithCommas} {data?.symbol}
      </Box>
      <Box marginLeft="5">{formattedAddress ? formattedAddress : ''}</Box>
    </Box>
  );
};
