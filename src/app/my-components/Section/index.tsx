import { HStack } from '@chakra-ui/react';

export interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <HStack
      color="dark.100"
      padding="1.5rem 1.25rem"
      borderRadius="0.75rem"
      bg="dark.900"
      gap="0.75rem"
      alignItems="baseline"
    >
      {children}
    </HStack>
  );
}
