import { FC } from 'react';

import { SimilarDealsItem } from '@app/pages/dashboard/lotView/components/SilimarDealsItem';
import { ISimilarDealItem } from '@app/pages/dashboard/lotView/types';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';

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
        <Heading variant="h4" opacity="0.6" fontWeight="400">
          Set the parameters you need to suggest the best trading conditions
        </Heading>
      </VStack>

      <SimpleGrid
        columns={4}
        spacing="0.75rem"
        w="100%"
        fontFamily="promo"
        marginTop={'1.5rem'}
      >
        {similarDeals.map((item) => (
          <SimilarDealsItem item={item} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
