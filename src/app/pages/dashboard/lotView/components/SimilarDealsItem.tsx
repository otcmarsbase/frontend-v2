import { FC } from 'react';

import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import { HotChip } from '@shared/ui-kit';

import { LotTypeChip } from '../../components/LotTypeChip';
import { ISimilarDealItem } from '../types';

import { ProgressBar } from './ProgressBar';

export const SimilarDealsItem: FC<{ item: ISimilarDealItem }> = ({ item }) => {
  const {
    dealID,
    lotType,
    direction,
    isHot,
    icon,
    nameOfAsset,
    currentAmount,
    totalAmount,
  } = item;
  return (
    <VStack
      borderRadius="0.5rem"
      bg="dark.800"
      padding="1.5rem 1.25rem"
      color="white"
      position="relative"
      gap="1.25rem"
      key={dealID}
    >
      <Box
        textTransform="uppercase"
        padding="0.125rem 1rem"
        borderRadius="0rem 0.75rem"
        position="absolute"
        top={0}
        right={0}
        bg={direction === 'BUY' ? 'rgba(52, 168, 83, 0.30)' : 'red'}
      >
        <Heading variant="h5" fontWeight="600">
          {direction}
        </Heading>
      </Box>
      <VStack gap="0.75rem" w="100%">
        <HStack>
          <Heading variant="h5" fontWeight="500" color="dark.200">
            #{dealID}
          </Heading>
          <LotTypeChip lotType={lotType} />
          {isHot ? <HotChip /> : null}
        </HStack>
        <HStack w="100%" alignItems="flex-start">
          <Box>{icon}</Box>
          <Heading
            variant="h2"
            letterSpacing="-0.0125rem"
            textTransform="capitalize"
          >
            {nameOfAsset}
          </Heading>
        </HStack>
      </VStack>
      <ProgressBar
        title="Available"
        currentAmount={currentAmount}
        totalAmount={totalAmount}
      />
    </VStack>
  );
};
