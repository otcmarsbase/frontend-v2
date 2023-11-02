import { useMemo } from 'react';
import { useTimer, TimerSettings } from 'react-timer-hook';

import { formatDate } from '@app/utils';
import { HStack } from '@chakra-ui/react';
import { Tooltip } from '@shared/ui-kit';

import { CountdownItem } from './CountdownItem';
import { CountdownPart } from './CountdownPart';

export type CountdownProps = TimerSettings;

export const Countdown: React.FC<CountdownProps> = ({ expiryTimestamp, onExpire, autoStart = true }) => {
  const { days, hours, minutes } = useTimer({
    autoStart,
    expiryTimestamp,
    onExpire,
  });

  const label = useMemo(() => {
    const isAuctionEnded = days === 0 && hours === 0 && minutes === 0;
    if (isAuctionEnded) return `Auction ended ${formatDate(expiryTimestamp, 'DATE_AND_TIME')}`;
    return Object.entries({ days, hours, minutes })
      .filter(([, value]) => (isAuctionEnded ? value : !!value))
      .map(([label, value]) => `${value} ${label}`)
      .join(', ');
  }, [days, expiryTimestamp, hours, minutes]);

  return (
    <Tooltip label={label}>
      <HStack>
        <CountdownPart value={days} />
        <CountdownItem value=":" isTransparent color="orange.500" />
        <CountdownPart value={hours} />
        <CountdownItem value=":" isTransparent color="orange.500" />
        <CountdownPart value={minutes} />
      </HStack>
    </Tooltip>
  );
};
