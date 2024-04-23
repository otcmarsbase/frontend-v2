import { BoosterInfoAdditionalInfoInput } from './BoosterInfoAdditionalInfoInput';
import { BoosterInfoFdvInput } from './BoosterInfoFdvInput';
import { BoosterInfoFutureRoundPrice } from './BoosterInfoFutureRoundPriceInput';
import { BoosterInfoListingTimelineInput } from './BoosterInfoListingTimelineInput';
import { BoosterInfoRoundPriceInput } from './BoosterInfoRoundPriceInput';
import { BoosterInfoRoundTypeInput } from './BoosterInfoRoundTypeInput';

export const BoosterInfoForm = () => {
  return (
    <>
      <BoosterInfoRoundTypeInput />
      <BoosterInfoFdvInput />
      <BoosterInfoRoundPriceInput />
      <BoosterInfoFutureRoundPrice />
      <BoosterInfoListingTimelineInput />
      <BoosterInfoAdditionalInfoInput />
    </>
  )
}
