import { LotBidSkeleton } from '@app/components';
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { range } from 'lodash';

import { LotGridSkeleton } from '../LotGridSkeleton';

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

export const LotPageSkeleton = () => {
  return (
    <VStack marginTop="2rem" alignItems="flex-start">
      <Grid templateColumns="28.5rem 1fr" columnGap="2rem" width="full">
        <VStack alignItems="flex-start" gap="1rem">
          <HStack bg="dark.900" w="full" borderRadius="sm" p="0.75rem 1.25rem">
            <HStack gap="1rem">
              <SkeletonCircle size="4rem" />
              <Skeleton h="2rem" w="10rem" />
            </HStack>
          </HStack>
          <HStack bg="dark.900" w="full" borderRadius="sm" p="1.5rem 1.25rem">
            <VStack w="full" alignItems="flex-start" gap="1rem">
              <Skeleton h="1.5rem" w="10rem" />
              <SkeletonText w="full" noOfLines={6} skeletonHeight="0.5rem" spacing="0.5rem" />
            </VStack>
          </HStack>
          {LinksBlockSkeleton}
          {LinksBlockSkeleton}
          {LinksBlockSkeleton}
        </VStack>
        <VStack position="sticky" top={0} bg="dark.950" w="full" zIndex={1}>
          <Box bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
            <HStack divider={<Divider color="dark.600" h="3rem" orientation="vertical" />} gap="2rem">
              <VStack alignItems="start">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="3rem" />
              </VStack>
              <VStack alignItems="start">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="5rem" />
              </VStack>
              <VStack alignItems="start">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="6rem" />
              </VStack>
            </HStack>
          </Box>
          <Grid gridTemplateColumns="61% 1fr" gap="1.5rem" borderRadius="0.5rem" w="full">
            <SimpleGrid columns={3} w="full" gap="0.81rem 0.75rem">
              <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="6rem" />
              </VStack>
              <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="6rem" />
              </VStack>
              <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="6rem" />
              </VStack>
              <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="6rem" />
              </VStack>
              <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="6rem" />
              </VStack>
              <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                <Skeleton h="1rem" w="4rem" />
                <Skeleton h="1rem" w="6rem" />
              </VStack>
              <GridItem colSpan={3}>
                <SimpleGrid columns={2} w="full" gap="0.81rem 0.75rem">
                  <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                    <Skeleton h="1rem" w="4rem" />
                    <Skeleton h="1rem" w="6rem" />
                  </VStack>
                  <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="1.5rem 1.25rem" w="full">
                    <Skeleton h="1rem" w="4rem" />
                    <Skeleton h="1rem" w="6rem" />
                  </VStack>
                </SimpleGrid>
              </GridItem>
            </SimpleGrid>
            <Box bg="dark.900" w="full" borderRadius="sm" p="1.5rem 1.25rem" h="full">
              <Skeleton w="10rem" h="1.5rem" mb="2rem" />

              <HStack gap="2rem">
                <SkeletonCircle size="8rem" ml="1rem" />
                <VStack alignItems="start" gap="1rem">
                  <Skeleton w="7rem" h="1rem" />
                  <Skeleton w="10rem" h="1rem" />
                  <Skeleton w="8rem" h="1rem" />
                </VStack>
              </HStack>
            </Box>
          </Grid>
          <HStack w="full" justifyContent="space-between" my="1rem">
            <HStack>
              <Skeleton w="6rem" h="2rem" />
              <SkeletonCircle size="1.8rem" />
            </HStack>
            <HStack>
              <Skeleton w="10rem" h="3rem" />
              <Skeleton w="7rem" h="3rem" />
            </HStack>
          </HStack>
          <VStack alignItems="start" w="full">
            {range(0, 3).map((key) => (
              <LotBidSkeleton key={key} />
            ))}
          </VStack>
        </VStack>
      </Grid>
      <Box mt="2rem" w="full" alignItems="start" layerStyle="darkLinearGradientBg" p="2rem" gap="1.25rem" rounded="2xl">
        <VStack alignItems="start" mb="2rem">
          <Skeleton h="2rem" w="11rem" />
          <Skeleton h="1rem" w="7rem" />
        </VStack>
        <LotGridSkeleton minimalCardView columns={4} items={faker.helpers.arrayElement([3, 4])} />
      </Box>
    </VStack>
  );
};
