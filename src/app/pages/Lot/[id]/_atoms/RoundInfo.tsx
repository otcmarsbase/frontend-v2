import { Heading, SimpleGrid, VStack, Text, HStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { format } from 'date-fns';

import { AvailableBlock } from './AvailableBlock';
import { RoundInfoItem } from './RoundInfoItem';

export interface RoundInfoProps {
  lot: Resource.Lot.Lot;
}

export const RoundInfo: React.FC<RoundInfoProps> = ({ lot }) => {
  return (
    <SimpleGrid gridTemplateColumns="61% 1fr" gap="1.5rem" borderRadius="0.5rem" w="full">
      <VStack gap="0.75rem">
        <SimpleGrid w="full" borderRadius="0.75rem" gridColumnGap="0.75rem" gridRowGap="0.81rem" columns={3}>
          <RoundInfoItem fieldName="PRICE_PER_EQUITY">
            <Text>TODO</Text>
          </RoundInfoItem>
          <RoundInfoItem fieldName="LOT_FDV">
            <Text fontWeight="800">TODO</Text>
          </RoundInfoItem>
          <RoundInfoItem fieldName="CONTRACT_SIZE">
            <Text fontWeight="800">TODO</Text>
          </RoundInfoItem>
          <RoundInfoItem fieldName="OWNER">
            <Text fontWeight="800">TODO</Text>
          </RoundInfoItem>
          <RoundInfoItem fieldName="SELLER">
            <Text fontWeight="800">TODO</Text>
          </RoundInfoItem>
          <RoundInfoItem fieldName="MIN_BID">
            <Text fontWeight="800">TODO</Text>
          </RoundInfoItem>
        </SimpleGrid>
        <SimpleGrid gridColumnGap="0.75rem" columns={2} w="full">
          <RoundInfoItem fieldName="TYPE_OF_BIDDER">
            <Text>TODO</Text>
          </RoundInfoItem>
          <RoundInfoItem fieldName="TYPE_OF_SELLER">
            <Text fontWeight="800">TODO</Text>
          </RoundInfoItem>
        </SimpleGrid>
      </VStack>

      <AvailableBlock lot={lot} />
    </SimpleGrid>
  );
};
