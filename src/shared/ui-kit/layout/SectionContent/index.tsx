import { HStack, Heading, VStack } from '@chakra-ui/react';

export interface SectionContentProps {
  children: React.ReactNode;
  full?: boolean;
  title?: React.ReactNode;
}

export function SectionContent({ title, full = true, children }: SectionContentProps) {
  return (
    <VStack w={full && 'full'}>
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
