import { FC, PropsWithChildren } from 'react';

import { Heading, HStack, VStack } from '@chakra-ui/react';

interface SidebarBlockProps {
  title: string;
}
export const SidebarBlock: FC<PropsWithChildren<SidebarBlockProps>> = ({ title, children }) => {
  return (
    <VStack
      color="dark.100"
      padding="1.5rem 1.25rem"
      borderRadius="0.75rem"
      bg="dark.900"
      gap="0.75rem"
      w="full"
      alignItems="baseline"
    >
      <Heading variant="h3" textTransform="uppercase" fontSize="1rem" color="white">
        {title}
      </Heading>
      <HStack flexWrap="wrap" gap="0.75rem">
        {children}
      </HStack>
    </VStack>
  );
};
