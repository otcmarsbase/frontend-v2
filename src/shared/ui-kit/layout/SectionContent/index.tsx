import { HStack, Heading, StackProps, VStack } from '@chakra-ui/react';

export interface SectionContentProps extends Omit<StackProps, 'title'> {
  children: React.ReactNode;
  full?: boolean;
  title?: React.ReactNode;
}

export function SectionContent({ title, full = true, children, ...stackProps }: SectionContentProps) {
  return (
    <VStack w={full && 'full'} alignItems="start" {...stackProps}>
      {title && (
        <Heading variant="h3" textTransform="uppercase" fontSize="1rem" color="white">
          {title}
        </Heading>
      )}
      <HStack flexWrap="wrap" w="full" gap="0.75rem">
        {children}
      </HStack>
    </VStack>
  );
}
