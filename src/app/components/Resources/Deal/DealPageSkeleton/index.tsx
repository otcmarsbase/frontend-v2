import { Box, HStack, SimpleGrid, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { range } from 'lodash';

import { TradeDirectionText } from '../../Common';

export const DealPageSkeleton = () => {
  return (
    <VStack w="full" alignItems="start">
      <HStack w="full" flexDirection={{ base: 'column', md: 'row' }} gap="2rem" alignItems="start">
        <VStack flex="1.5" alignItems="start" gap="1.5rem">
          <Box padding="3rem 1.25rem" position="relative" bg="dark.900" w="full" borderRadius="sm">
            <TradeDirectionText position="absolute" top="0" left="0" color="dark.800" bg="dark.800" value="BUY" />

            <HStack w="full" justifyContent="space-between">
              <VStack gap="1rem" alignItems="start">
                <HStack>
                  <SkeletonCircle size="3rem" />
                  <Skeleton w={faker.helpers.arrayElement(['10rem', '4.5rem', '6rem'])} h="2rem" />
                </HStack>

                <Skeleton w="6rem" h="1rem" />
              </VStack>

              <VStack alignItems="end" gap="1rem">
                <HStack>
                  <Skeleton w="5rem" h="1rem" />
                  <Skeleton w="2rem" h="1rem" />
                </HStack>
                <HStack>
                  <Skeleton w="5rem" h="1rem" />
                  <Skeleton w="8rem" h="1rem" />
                </HStack>
                <HStack>
                  <Skeleton w="5rem" h="1rem" />
                  <Skeleton w="3.5rem" h="1rem" />
                </HStack>
              </VStack>
            </HStack>
          </Box>
          <Box padding="2rem 1.25rem" position="relative" bg="dark.900" w="full" borderRadius="sm">
            <Skeleton w="10rem" h="2rem" mb="2rem" />

            <SimpleGrid columns={2} w="full" gap="1.5rem">
              {range(0, 4).map((key) => (
                <HStack w="full" justifyContent="space-between" key={key}>
                  <Skeleton w={faker.helpers.arrayElement(['4rem', '5rem', '7rem', '10rem'])} h="1rem" />
                  <Skeleton w="4rem" h="1rem" />
                </HStack>
              ))}
            </SimpleGrid>
          </Box>

          <Box padding="2rem 1.25rem" position="relative" bg="dark.900" w="full" borderRadius="sm">
            <Skeleton w="10rem" h="2rem" mb="2rem" />

            <SimpleGrid columns={4} w="full" gap="3.5rem">
              {range(0, 4).map((key) => (
                <VStack w="full" alignItems="start" key={key} gap="1.5rem">
                  <VStack alignItems="start" w="full">
                    <Skeleton w="6rem" h="1rem" />
                    <HStack>
                      <SkeletonCircle size="1.5rem" />
                      <Skeleton w="6rem" h="1rem" />
                    </HStack>
                  </VStack>
                  <VStack alignItems="start">
                    <Skeleton w="6rem" h="1rem" />
                    <Skeleton w="10rem" h="1rem" />
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
        <VStack flex="1" padding="1.5rem 1.25rem" gap="1.25rem" bg="dark.900" borderRadius="sm" alignItems="start">
          <Skeleton w="20rem" h="1rem" />

          <VStack w="full" alignItems="start" gap="0.75rem">
            <VStack
              w="full"
              alignItems="start"
              borderRadius="sm"
              border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
              padding="0.75rem"
              gap="0.75rem"
            >
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
            </VStack>

            <VStack
              w="full"
              alignItems="start"
              borderRadius="sm"
              border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
              padding="0.75rem"
              gap="0.75rem"
            >
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
            </VStack>

            <VStack
              w="full"
              alignItems="start"
              borderRadius="sm"
              border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
              padding="0.75rem"
              gap="0.75rem"
            >
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
            </VStack>

            <VStack
              w="full"
              alignItems="start"
              borderRadius="sm"
              border="1px dashed var(--ui-kit-dark-600, #2C2C2E)"
              padding="0.75rem"
              gap="0.75rem"
            >
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
              <HStack w="full" justifyContent="space-between">
                <Skeleton w="10rem" h="1rem" />
                <SkeletonCircle size="1rem" />
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
