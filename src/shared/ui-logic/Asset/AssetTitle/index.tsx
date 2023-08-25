import React, { FC } from 'react';

import { Box, Heading, HStack } from '@chakra-ui/react';

export interface AssetTitleProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  analyticsUrl?: string;
}

export function AssetTitle({ title, icon, analyticsUrl }: AssetTitleProps) {
  return (
    <HStack w="100%" gap="1.5rem">
      <HStack gap="0.5rem">
        <Box>{icon}</Box>
        <Heading variant="h2" fontWeight="500">
          {title}
        </Heading>
      </HStack>
      <Heading variant="h5" fontWeight="500">
        Download asset research
      </Heading>
    </HStack>
  );
}
