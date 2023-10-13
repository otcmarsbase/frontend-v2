import { useMemo } from 'react';
import { useTimer, TimerSettings } from 'react-timer-hook';

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

  const label = useMemo(
    () =>
      Object.entries({ days, hours, minutes })
        .filter(([, value]) => !!value)
        .map(([label, value]) => `${value} ${label}`)
        .join(', '),
    [days, hours, minutes],
  );

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
