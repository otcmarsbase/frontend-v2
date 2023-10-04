import { useMemo } from 'react';

import { CountdownItem } from './CountdownItem';

export interface CountdownPartProps {
  value: number;
  pad?: number;
}

export const CountdownPart: React.FC<CountdownPartProps> = ({ value, pad = 2 }) => {
  const items = useMemo(() => value.toString().padStart(pad, '0').split(''), [value, pad]);

  return (
    <>
      {items.map((item, index) => (
        <CountdownItem key={index} value={item} />
      ))}
    </>
  );
};
