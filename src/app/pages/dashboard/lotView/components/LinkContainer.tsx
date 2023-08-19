import { FC } from 'react';

import { Box, Text, HStack } from '@chakra-ui/react';

import { ILotViewLinks } from '../types';

export const LinksContainer: FC<ILotViewLinks> = ({ icon, text, href }) => {
  return (
    <HStack
      borderRadius="0.25rem"
      bg="rgba(255, 255, 255, 0.10)"
      padding="0.25rem 0.75rem"
      onClick={() => console.log('href', href)}
    >
      <Box color="white">{icon}</Box>
      <Text fontWeight="500" fontSize="sm" color="dark.50">
        {text}
      </Text>
    </HStack>
  );
};
