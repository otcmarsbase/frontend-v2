import { Divider, HStack, SimpleGrid, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { range } from 'lodash';

import { TradeDirectionText } from '../../Common';

export interface LotCardSkeletonProps {
  minimalView?: boolean;
}

export const LotCardSkeleton: React.FC<LotCardSkeletonProps> = ({ minimalView }) => {
  return (
    <VStack p="1.5rem 1.25rem" position="relative" borderRadius="sm" bg="dark.900" gap={0} alignItems="start" h="full">
      <TradeDirectionText invert position="absolute" top="0" right="0" color="dark.800" bg="dark.800" value="BUY" />
      <HStack mb="1rem">
        <Skeleton w="1rem" h="1rem" />
        <Skeleton w={faker.helpers.arrayElement(['1.3rem', '3.5rem'])} h="1.2rem" />
      </HStack>
      <HStack>
        <SkeletonCircle size="3rem" />
        <Skeleton w={faker.helpers.arrayElement(['7rem', '4.5rem', '3rem'])} h="2rem" />
      </HStack>
      {!minimalView && (
        <>
          <Divider variant="dashed" color="dark.600" my="1rem" />
          <SimpleGrid columns={2} gridColumnGap="2rem" gridRowGap="1.5rem">
            {range(0, 6).map((key) => (
              <VStack alignItems="start" key={key}>
                <Skeleton h="1.2rem" w={faker.helpers.arrayElement(['4rem', '6rem', '3.4rem', '1.2rem'])} />
                <Skeleton h="1.2rem" w={faker.helpers.arrayElement(['6rem', '4.5rem', '3rem'])} />
              </VStack>
            ))}
          </SimpleGrid>
          <Divider variant="dashed" color="dark.600" my="1rem" />
        </>
      )}
      <VStack w="full" alignItems="start">
        <HStack w="full" justifyContent="space-between">
          <Skeleton h="1rem" w="7rem" />
          <HStack
            gap="0.3rem"
            divider={
              <Text fontSize="sm" color="dark.700">
                /
              </Text>
            }
          >
            <Skeleton h="0.8rem" w="2rem" />
            <Skeleton h="0.8rem" w="2rem" />
          </HStack>
        </HStack>
        <Skeleton h="1rem" w="full" />
      </VStack>
    </VStack>
  );
};
