import { FC, PropsWithChildren } from 'react';

import { VStack, Text } from '@chakra-ui/react';

export interface InputGroupProps {
  title: string;
  description: string;
}

export const InputGroup: FC<PropsWithChildren<InputGroupProps>> = ({ title, description, children }) => {
  return (
    <VStack spacing="3" w="full" alignItems="flex-start">
      <VStack alignItems="start" gap="0.1rem">
        <Text fontSize="2md" fontWeight="bold">
          {title}
        </Text>
        <Text color="dark.50" fontSize="sm">
          {description}
        </Text>
      </VStack>
      <VStack
        bg="dark.900"
        px={{ base: '3', md: '9' }}
        py={{ base: '3', md: '6' }}
        w="full"
        rounded="md"
        spacing={{ base: '3', md: '9' }}
      >
        {children}
      </VStack>
    </VStack>
  );
};
