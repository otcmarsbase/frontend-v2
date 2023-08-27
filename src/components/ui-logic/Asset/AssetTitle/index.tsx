import React from 'react';

import { Box, Text, HStack, Image } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface AssetTitleProps {
  asset: Resource.Asset.Asset;
}

export function AssetTitle({ asset }: AssetTitleProps) {
  return (
    <HStack w="100%" gap="1.5rem">
      <HStack gap="0.5rem">
        <Box>
          <Image src={asset.info.logo_url} />
        </Box>
        <Text fontWeight="500">{asset.info.title}</Text>
      </HStack>
      <Text fontWeight="500">Download asset research</Text>
    </HStack>
  );
}
