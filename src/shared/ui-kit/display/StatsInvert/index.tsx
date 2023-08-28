import { VStack, HStack, Heading } from '@chakra-ui/react';

export interface StatsInvertProps {
  title?: React.ReactNode;
  value?: React.ReactNode;
}

export function StatsInvert({ title, value }: StatsInvertProps) {
  return (
    <VStack gap="0">
      <HStack justifyContent="flex-start" w="full">
        {value}
      </HStack>
      <Heading variant="h5" fontWeight="600" color="dark.50">
        {title}
      </Heading>
    </VStack>
  );
}
