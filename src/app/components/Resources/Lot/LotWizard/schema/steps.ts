import * as yup from 'yup';

import { SafeInputs } from './categories';
import { LotCreateModel, LotCreateSchema } from './LotCreate';

export const InvestDocStartStepInputs = LotCreateSchema.pick([
  'type',
  'COMMON_DIRECTION_INPUT',
  'INVEST_DOC_ASSET_PK_INPUT',
]);

export const CommonProjectStepInputs = LotCreateSchema.pick([
  'COMMON_OFFER_MAKER_TYPES_INPUT',
  'COMMON_BID_MAKER_TYPES_INPUT',
  'COMMON_DEADLINE_INPUT',
  'COMMON_TELEGRAM_INPUT',
  'COMMON_MEDIATOR_INPUT',
]);

export const InvestDocPriceStepInputs = LotCreateSchema.pick([
  'COMMON_PRICE_INPUT',
  'COMMON_SUMMARY_INPUT',
  'COMMON_UNITS_INPUT',
  'INVEST_DOC_FDV_INPUT',
  'COMMON_MIN_FILTER_UNITS_INPUT',
  'COMMON_MIN_FILTER_SUMMARY_INPUT',
]);

export const InvestDocReviewStepInputs = yup.lazy((data: LotCreateModel) => {
  if (!data) return yup.object();

  switch (data.type) {
    case 'SAFE':
      return SafeInputs.resolve({ value: data });
  }
});
