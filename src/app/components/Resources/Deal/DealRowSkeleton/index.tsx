import { Grid, GridItem, HStack, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';

export const DealRowSkeleton: React.FC = () => (
  <HStack
    bg="dark.900"
    borderRadius="0.75rem"
    width="full"
    padding="1.5rem"
    paddingRight="6rem"
    justifyContent="space-between"
    position="relative"
    alignItems="start"
  >
    <VStack gap="1rem" alignItems="start" width="30%">
      <Skeleton height="1.5rem" w="7rem" />
      <HStack gap="0.5rem" alignItems="center">
        <SkeletonCircle size="1.5rem" />
        <Skeleton height="1.5rem" width="10rem" />
      </HStack>
      <Skeleton height="1rem" width="8rem" />
    </VStack>
    <HStack>
      <Grid templateColumns={'repeat(4, 13rem)'} gridRowGap="1.5rem">
        {[...Array(6)].map((_, index) => (
          <GridItem key={index}>
            <VStack alignItems="start" maxW="8rem" w="full">
              <Skeleton height="0.7rem" width="50%" />
              <Skeleton height="1rem" width="full" />
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </HStack>
  </HStack>
);
