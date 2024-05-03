import * as yup from 'yup';

import { EquityInputs, SafeInputs, SaftInputs, TokenWarrantInputs, UnlockedTokensInputs } from './categories';
import { LotCreateModel, LotCreateSchema } from './LotCreate';

export const InvestDocStartStepInputs = LotCreateSchema.pick([
  'type',
  'COMMON_DIRECTION',
  'INVEST_DOC_ASSET',
  'SAFE_WITH_TOKEN_WARRANT',
  'INVEST_DOC_REASSIGNMENT_TYPE',
  'COMMON_OFFER_MAKER_TYPES',
  'COMMON_TELEGRAM',
  'COMMON_IS_DIRECT',
]);

export const InvestDocInfoStepInputs = LotCreateSchema.pick([
  'COMMON_PRICE',
  'COMMON_SUMMARY',
  'COMMON_UNITS',
  'INVEST_DOC_FDV',
  'INVEST_DOC_ASSET',
  'COMMON_MIN_FILTER_SUMMARY',
  'COMMON_ADDITIONAL_INFO',
  'TOKEN_VESTING_PERIOD',
  'BOOSTER_INFO_ROUND_TYPE',
  'BOOSTER_INFO_FDV',
  'BOOSTER_INFO_ROUND_PRICE',
  'BOOSTER_INFO_FUTURE_ROUND_PRICE',
  'BOOSTER_INFO_ADDITIONAL_INFO',
  'BOOSTER_INFO_LISTING_TIMELINE',
]);

export const InvestDocReviewStepInputs = yup.lazy((value: LotCreateModel) => {
  if (!value) return yup.object();

  switch (value.type) {
    case 'SAFE':
      return SafeInputs.resolve({ value });
    case 'SAFT':
      return SaftInputs.resolve({ value });
    case 'TOKEN_WARRANT':
      return TokenWarrantInputs.resolve({ value });
    case 'EQUITY':
      return EquityInputs.resolve({ value });
    case 'UNLOCKED_TOKENS':
      return UnlockedTokensInputs.resolve({ value });
  }
});
