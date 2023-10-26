import { HStack, VStack, SimpleGrid } from '@chakra-ui/layout';
import { Skeleton, SkeletonCircle } from '@chakra-ui/skeleton';
import { range } from 'lodash';

export const LotBidSkeleton = () => (
  <HStack bg="dark.900" w="full" justifyContent="space-between" borderRadius="sm" p="1.5rem 1.25rem">
    <VStack alignItems="start">
      <Skeleton h="1rem" w="2rem" />
      <HStack>
        <SkeletonCircle size="1.5rem" />
        <Skeleton h="1rem" w="3rem" />
      </HStack>
    </VStack>
    <SimpleGrid columns={6} gap="2rem">
      {range(0, 6).map((key) => (
        <VStack alignItems="start" key={key}>
          <Skeleton h="1rem" w="4rem" />
          <Skeleton h="1rem" w="3rem" />
        </VStack>
      ))}
    </SimpleGrid>
  </HStack>
);
