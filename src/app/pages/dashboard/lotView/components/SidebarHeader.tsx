import { FC } from 'react';

import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import { DownloadIcon } from '@shared/ui-kit';

export interface SidebarHeaderProps {
  Icon: React.ReactNode;
  name: string;
  analytics: string;
}

export const SidebarHeader: FC<SidebarHeaderProps> = ({ Icon, name }) => {
  return (
    <HStack
      w="100%"
      h="5.5rem"
      justifyContent="space-between"
      padding="0.75rem 1.25rem"
      bg="dark.900"
      borderRadius="0.75rem"
    >
      <HStack gap="2.12rem">
        <HStack gap="1.5rem">
          <Box w="4rem">{Icon}</Box>
          <Heading as="h2" variant="h4" fontSize={'lg'} fontFamily="promo">
            {name}
          </Heading>
        </HStack>
        <Button leftIcon={<DownloadIcon />}>
          <Text fontWeight="800" whiteSpace="nowrap">
            Get analytics
          </Text>
        </Button>
      </HStack>
    </HStack>
  );
};
