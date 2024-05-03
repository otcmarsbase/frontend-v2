import { UseFormGetValues } from 'react-hook-form';

import { LotCreateModel } from '@app/components';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export const BOOSTER_INFO_PROGRESS = (type: DeskGatewaySchema.LotType, SAFE_WITH_TOKEN_WARRANT: boolean, values: LotCreateModel) => {
  const ATTRIBUTES_WEIGHT = {
    type: 6.5,
    COMMON_TELEGRAM: 6.5,
    COMMON_IS_DIRECT: 6.5,
    COMMON_OFFER_MAKER_TYPES: 7,
    COMMON_SUMMARY: 7,
    COMMON_MIN_FILTER_SUMMARY: 7.5,
    INVEST_DOC_REASSIGNMENT_TYPE: 7.5,
    INVEST_DOC_ASSET: 7.5,

    INVEST_DOC_FDV: 10,
    BOOSTER_INFO_ROUND_TYPE: 4,
    BOOSTER_INFO_FDV: 4,
    BOOSTER_INFO_ROUND_PRICE: 5,
    BOOSTER_INFO_FUTURE_ROUND_PRICE: 5,
    BOOSTER_INFO_LISTING_TIMELINE: 5,
    BOOSTER_INFO_ADDITIONAL_INFO: 5,
  }

  const calcProgress = () => {
    const attributeWeight = { ...ATTRIBUTES_WEIGHT }

    if (type === 'EQUITY' || type === 'UNLOCKED_TOKENS') {
      attributeWeight['COMMON_PRICE'] = 6.5;
    }

    if (type === 'TOKEN_WARRANT' || type === 'SAFT' || SAFE_WITH_TOKEN_WARRANT) {
      attributeWeight['TOKEN_VESTING_PERIOD'] = 6.5;
    }

    let result = 0

    for (const attribute in attributeWeight) {
      if (attribute === 'INVEST_DOC_ASSET') {
        if ('id' in values['INVEST_DOC_ASSET']) {
          result += attributeWeight[attribute]
        }
        if ('pitchDeck' in values['INVEST_DOC_ASSET'] && values['INVEST_DOC_ASSET'].pitchDeck) {
          result += attributeWeight[attribute] / 2
        }
        if ('tokenomics' in values['INVEST_DOC_ASSET'] && values['INVEST_DOC_ASSET'].tokenomics) {
          result += attributeWeight[attribute] / 2
        }
      } else {
        if (values[attribute]) {
          result += attributeWeight[attribute]
        }
      }
    }

    return Math.floor(result)
  }

  return calcProgress()
}
