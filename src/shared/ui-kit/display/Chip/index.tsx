import { ReactNode, useMemo } from 'react';

import { Text } from '@chakra-ui/react';

export interface BooleanChipProps {
  yes?: ReactNode;
  no?: ReactNode;
  value: boolean;
}

export function BooleanChip({ value, yes = 'Yes', no = 'No' }: BooleanChipProps) {
  const color = useMemo(() => (value ? 'green-promo' : 'red.500'), [value]);

  return (
    <Text
      padding="0.125rem 0.5rem"
      borderRadius="6.25rem"
      fontSize="2xs"
      color="white"
      fontWeight="600"
      bg={color}
      whiteSpace="nowrap"
    >
      {value ? yes : no}
    </Text>
  );
}
