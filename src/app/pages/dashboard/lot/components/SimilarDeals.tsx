import { FC } from 'react';

import { SimilarDealsItem } from '@app/pages/dashboard/lot/components/SilimarDealsItem';
import { ISimilarDealItem } from '@app/pages/dashboard/lot/types';
import { Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
export const SimilarDeals: FC<{ similarDeals: ISimilarDealItem[] }> = ({
  similarDeals,
}) => {
  return (
    <VStack
      w="100%"
      padding="1.94rem 1.5rem 2.44rem"
      borderRadius="0.625rem"
      background="linear-gradient(180deg, #170901 0%, rgba(15, 6, 0, 0.00) 100%)"
    >
      <VStack alignItems="flex-start" w="100%">
        <Heading variant="h3" textTransform="uppercase">
          Similar deals
        </Heading>
        <Text color="dark.50" fontSize="sm" fontWeight="400">
          Set the parameters you need to suggest the best trading conditions
        </Text>
      </VStack>

      <SimpleGrid columns={4} spacing="0.75rem" w="100%" marginTop={'1.5rem'}>
        {similarDeals.map((item) => (
          <SimilarDealsItem item={item} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
