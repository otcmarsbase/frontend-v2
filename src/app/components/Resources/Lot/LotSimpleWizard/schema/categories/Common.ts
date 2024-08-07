import * as yup from 'yup';

import {
  COMMON_DIRECTION,
  COMMON_IS_DIRECT,
  COMMON_MIN_FILTER_SUMMARY,
  COMMON_OFFER_MAKER_TYPES,
  COMMON_PRICE,
  COMMON_SUMMARY,
  COMMON_TELEGRAM,
  COMMON_UNITS,
  COMMON_ADDITIONAL_INFO,
} from '../inputs';

export const CommonInputs = yup.object({
  COMMON_DIRECTION: COMMON_DIRECTION.required().default('BUY'),
  COMMON_IS_DIRECT: COMMON_IS_DIRECT.required().default(true),
  COMMON_MIN_FILTER_SUMMARY: COMMON_MIN_FILTER_SUMMARY.minValue(5000)
    .lessThan('COMMON_SUMMARY', 'The "Minimal bid" field must be less than the "Deal size".')
    .default('5000')
    .required(),
  COMMON_OFFER_MAKER_TYPES: COMMON_OFFER_MAKER_TYPES.min(1).required(),
  COMMON_PRICE: COMMON_PRICE.nullable(),
  COMMON_SUMMARY: COMMON_SUMMARY.minValue(50000).required(),
  COMMON_TELEGRAM: COMMON_TELEGRAM.required(),
  COMMON_UNITS: COMMON_UNITS,
  COMMON_ADDITIONAL_INFO,
});

export type CommonInputsModel = yup.InferType<typeof CommonInputs>;
