import { HStack, Heading, VStack } from '@chakra-ui/react';

export interface SectionContentProps {
  children: React.ReactNode;

  title?: React.ReactNode;
}

export function SectionContent({ title, children }: SectionContentProps) {
  return (
    <VStack>
      {title && (
        <Heading variant="h3" textTransform="uppercase" fontSize="1rem" color="white">
          {title}
        </Heading>
      )}
      <HStack flexWrap="wrap" gap="0.75rem">
        {children}
      </HStack>
    </VStack>
  );
}
