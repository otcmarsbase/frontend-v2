import { VStack } from '@chakra-ui/react';

import { LotInfoReview } from '../LOT_INFO';
import { PrjectInfoReview } from '../PROJECT_INFO';
import { StartInfoReview } from '../START_INFO';

export function ReviewStep() {
  return (
    <VStack p="2rem" gap="1.5rem" alignItems="start">
      <StartInfoReview />
      <PrjectInfoReview />
      <LotInfoReview />
    </VStack>
  );
}
