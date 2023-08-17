import React, { ReactNode } from 'react';

import { Box, HStack, VStack } from '@chakra-ui/react';
import { ArrowLeft as Arrow } from '@shared/assets/ArrowLeft';

export interface StickyContainerProps extends React.PropsWithChildren {
  sidebar: ReactNode;
  head: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

export const StickyContainer: React.FC<StickyContainerProps> = ({
  sidebar,
  head,
  main,
  footer,
}) => {

    return (
    <VStack marginTop="2rem" alignItems='flex-start'>
      <HStack w='100%' color='#888D9B' cursor='pointer'>
        <Arrow />
        <Box>Back to OTC Desk</Box>
      </HStack>
      <HStack
        alignItems='flex-start'
        w='100%'
        position="relative"
        gap="2rem"
      >
        {sidebar}
        <VStack w='100%' h="fit-content" gap="1.5rem">
          {head}
          {main}
        </VStack>
      </HStack>
      {footer}
    </VStack>
  );
};
