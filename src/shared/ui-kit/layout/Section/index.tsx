import { HStack, StackProps, ThemeComponentProps } from '@chakra-ui/react';

export interface SectionProps extends StackProps {
  children: React.ReactNode;
}

export function Section({ children, ...stackProps }: SectionProps) {
  return (
    <HStack
      color="dark.100"
      padding="1.5rem 1.25rem"
      borderRadius="0.75rem"
      bg="dark.900"
      gap="0.75rem"
      alignItems="baseline"
      {...stackProps}
    >
      {children}
    </HStack>
  );
}
