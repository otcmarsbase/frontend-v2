import React, { FC } from 'react';

import { Box, Text, HStack } from '@chakra-ui/react';

export interface AssetTitleProps {
  title: React.ReactNode;
  icon: React.ReactNode;
}

export function AssetTitle({ title, icon }: AssetTitleProps) {
  return (
    <HStack w="100%" gap="1.5rem">
      <HStack gap="0.5rem">
        <Box>{icon}</Box>
        <Text fontWeight="500">{title}</Text>
      </HStack>
      <Text fontWeight="500">Download asset research</Text>
    </HStack>
  );
}
