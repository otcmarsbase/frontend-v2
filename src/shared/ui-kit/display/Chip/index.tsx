import { PropsWithChildren } from 'react';

import { HStack, Text } from '@chakra-ui/react';

export interface ChipProps extends PropsWithChildren {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Chip({ leftIcon, rightIcon, children }: ChipProps) {
  return (
    <HStack
      borderRadius="0.25rem"
      bg="rgba(207, 79, 41, 0.40)"
      padding="0.12rem 0.5rem"
      alignItems="center"
      gap="0.12rem"
      justifyContent="center"
    >
      {leftIcon}
      <Text display="flex" alignItems="center" fontWeight="semibold" fontSize="2xs">
        {children}
      </Text>
      {rightIcon}
    </HStack>
  );
}
