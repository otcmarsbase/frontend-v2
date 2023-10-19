import * as yup from 'yup';

import { SafeInputs, SaftInputs, TokenWarrantInputs } from './categories';
import { LotCreateModel, LotCreateSchema } from './LotCreate';

export const InvestDocStartStepInputs = LotCreateSchema.pick([
  'type',
  'COMMON_DIRECTION',
  'INVEST_DOC_ASSET',
  'SAFE_WITH_TOKEN_WARRANT',
  'INVEST_DOC_WITH_REASSIGN',
]);

export const CommonProjectStepInputs = LotCreateSchema.pick([
  'COMMON_OFFER_MAKER_TYPES',
  'COMMON_BID_MAKER_TYPES',
  'COMMON_DEADLINE',
  'COMMON_TELEGRAM',
  'COMMON_IS_DIRECT',
]);

export const InvestDocPriceStepInputs = LotCreateSchema.pick([
  'COMMON_PRICE',
  'COMMON_SUMMARY',
  'COMMON_UNITS',
  'INVEST_DOC_FDV',
  'COMMON_MIN_FILTER_UNITS',
  'COMMON_MIN_FILTER_SUMMARY',
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
  }
});
