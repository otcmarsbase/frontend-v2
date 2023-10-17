import { Box, Button, Grid, HStack, Skeleton, SkeletonCircle, SkeletonText, VStack } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';

import { LotGridSkeleton } from '../../Lot/LotGridSkeleton';

const LinksBlockSkeleton = (
  <HStack bg="dark.900" w="full" borderRadius="sm" p="1.5rem 1.25rem">
    <VStack w="full" alignItems="flex-start" gap="1rem">
      <Skeleton h="1.5rem" w="10rem" />
      <HStack gap="1rem">
        <Button pointerEvents="none" variant="darkSolid" size="xs">
          <Skeleton w="5rem" h="0.5rem" />
        </Button>
        <Button pointerEvents="none" variant="darkSolid" size="xs">
          <Skeleton w="5rem" h="0.5rem" />
        </Button>
        <Button pointerEvents="none" variant="darkSolid" size="xs">
          <Skeleton w="5rem" h="0.5rem" />
        </Button>
      </HStack>
    </VStack>
  </HStack>
);

const StatsSkeleton = () => (
  <VStack alignItems="start">
    <Skeleton h="1rem" w={faker.helpers.arrayElement(['2rem', '3rem', '4rem'])} />
    <Skeleton h="1rem" w={faker.helpers.arrayElement(['4rem', '6rem', '8rem'])} />
  </VStack>
);

export const AssetPageSkeleton = () => {
  return (
    <VStack marginTop="2rem" alignItems="flex-start">
      <HStack gap="1rem" mb="1rem">
        <SkeletonCircle size="4rem" />
        <Skeleton h="2.8rem" w="10rem" />
        <Skeleton h="2rem" w="10rem" borderRadius="light" />
      </HStack>
      <HStack gap="2.5rem" mb="2rem">
        <StatsSkeleton />
        <StatsSkeleton />
        <StatsSkeleton />
        <StatsSkeleton />
        <StatsSkeleton />
      </HStack>
      <Grid templateColumns="30rem 2fr" columnGap="2rem" width="full">
        <VStack alignItems="flex-start" gap="1rem">
          {LinksBlockSkeleton}
          {LinksBlockSkeleton}
          {LinksBlockSkeleton}
        </VStack>
        <VStack position="sticky" top={0} bg="dark.950" w="full" zIndex={1}>
          <Box bg="dark.900" borderRadius="sm" h="full" p="1.5rem 1.25rem" w="full">
            <VStack alignItems="start" w="full" gap="2rem">
              <Skeleton h="1.5rem" w="12rem" />
              <SkeletonText w="full" h="full" noOfLines={10} skeletonHeight="0.8rem" spacing="1rem" />
            </VStack>
          </Box>
        </VStack>
      </Grid>
      <Box mt="2rem" w="full" alignItems="start" p="2rem" gap="1.25rem" rounded="2xl">
        <HStack alignItems="start" mb="2rem">
          <Skeleton h="2rem" w="11rem" />
          <Skeleton h="2rem" w="11rem" />
        </HStack>
        <LotGridSkeleton columns={4} items={4} />
      </Box>
    </VStack>
  );
};
