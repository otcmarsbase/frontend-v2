import { VStack, HStack, Text } from '@chakra-ui/react';

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
      <Text fontSize="sm" fontWeight="600" color="dark.50">
        {title}
      </Text>
    </VStack>
  );
}
