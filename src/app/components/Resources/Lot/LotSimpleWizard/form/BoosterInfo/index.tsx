import { Divider, HStack, VStack } from '@chakra-ui/react';

import { BoosterInfoAdditionalInfoInput } from './BoosterInfoAdditionalInfoInput';
import { BoosterInfoDiscountToLastRound } from './BoosterInfoDiscountToLastRound';
import { BoosterInfoFdvInput } from './BoosterInfoFdvInput';
import { BoosterInfoFutureRoundPrice } from './BoosterInfoFutureRoundPriceInput';
import { BoosterInfoListingTimelineInput } from './BoosterInfoListingTimelineInput';
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
      <BoosterInfoFutureRoundPrice />
      <BoosterInfoDiscountToLastRound />
      <BoosterInfoListingTimelineInput />
      <BoosterInfoAdditionalInfoInput />
    </VStack>
  )
}
