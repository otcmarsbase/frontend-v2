import React, { FC } from 'react';

import { Box, Heading, HStack } from '@chakra-ui/react';

interface IHeaderTitleChip {
  //todo
  icon: string;
  name: string;
  assetResearch: string;
}

export const HeaderTitleChip: FC<IHeaderTitleChip> = ({
  icon,
  name,
  assetResearch,
}) => {
  return (
    <HStack w="100%" gap="1.5rem">
      <HStack gap="0.5rem">
        <Box>{icon}</Box>
        <Heading variant="h2" fontWeight="500">
          {name}
        </Heading>
      </HStack>
      <Heading variant="h5" fontWeight="500">
        Download asset research
      </Heading>
    </HStack>
  );
};
