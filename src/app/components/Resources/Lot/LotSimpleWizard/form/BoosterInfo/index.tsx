import { HStack, VStack } from '@chakra-ui/react';

import { BoosterInfoDiscountToLastRound } from './BoosterInfoDiscountToLastRound';
import { BoosterInfoFdvInput } from './BoosterInfoFdvInput';
import { BoosterInfoFutureRoundPriceInput } from './BoosterInfoFutureRoundPriceInput';
import { BoosterInfoListingTimelineInput } from './BoosterInfoListingTimelineInput';
import { BoosterInfoPreviousRoundPriceInput } from './BoosterInfoPreviousRoundPriceInput';
import { BoosterInfoProjectPitchDeckInput } from './BoosterInfoProjectPitchDeckInput';
import { BoosterInfoProjectTokenomicsInput } from './BoosterInfoProjectTokenomicsInput';
import { BoosterInfoRoundPriceInput } from './BoosterInfoRoundPriceInput';
import { BoosterInfoRoundTypeInput } from './BoosterInfoRoundTypeInput';

export const BoosterInfoForm = () => {
  return (
    <VStack>
      <HStack>
        <BoosterInfoProjectPitchDeckInput />
        <BoosterInfoProjectTokenomicsInput />
      </HStack>
      <BoosterInfoRoundTypeInput />
      <BoosterInfoFdvInput />
      <BoosterInfoRoundPriceInput />
      <BoosterInfoPreviousRoundPriceInput />
      <BoosterInfoFutureRoundPriceInput />
      <BoosterInfoDiscountToLastRound />
      <BoosterInfoListingTimelineInput />
    </VStack>
  )
}
