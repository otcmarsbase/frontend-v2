import * as yup from 'yup';

import {
  COMMON_BID_MAKER_TYPES,
  COMMON_DEADLINE,
  COMMON_DIRECTION,
  COMMON_IS_DIRECT,
  COMMON_MIN_FILTER_SUMMARY,
  COMMON_MIN_FILTER_UNITS,
  COMMON_OFFER_MAKER_TYPES,
  COMMON_PRICE,
  COMMON_SUMMARY,
  COMMON_TELEGRAM,
  COMMON_UNITS,
  COMMON_IS_PERMANENT,
  COMMON_IS_NO_LIMIT,
  COMMON_ADDITIONAL_INFO,
} from '../inputs';

export const CommonInputs = yup.object({
  COMMON_BID_MAKER_TYPES: COMMON_BID_MAKER_TYPES.when('COMMON_IS_NO_LIMIT', {
    is: true,
    then: (field) => field.notRequired(),
    otherwise: (field) => field.min(1).required(),
  }),
  COMMON_IS_NO_LIMIT: COMMON_IS_NO_LIMIT.default(false),
  COMMON_DEADLINE: COMMON_DEADLINE.when('COMMON_IS_PERMANENT', {
    is: true,
    then: (field) => field.notRequired(),
    otherwise: (field) => field.required(),
  }),
  COMMON_IS_PERMANENT: COMMON_IS_PERMANENT.default(false),
  COMMON_DIRECTION: COMMON_DIRECTION.required().default('BUY'),
  COMMON_IS_DIRECT: COMMON_IS_DIRECT.default(false),
  COMMON_MIN_FILTER_SUMMARY: COMMON_MIN_FILTER_SUMMARY.default('5000').required(),
  COMMON_MIN_FILTER_UNITS: COMMON_MIN_FILTER_UNITS.nullable(),
  COMMON_OFFER_MAKER_TYPES: COMMON_OFFER_MAKER_TYPES.min(1).required(),
  COMMON_PRICE: COMMON_PRICE.nullable(),
  COMMON_SUMMARY: COMMON_SUMMARY.required(),
  COMMON_TELEGRAM: COMMON_TELEGRAM.required(),
  COMMON_UNITS: COMMON_UNITS,
  COMMON_ADDITIONAL_INFO,
});

export type CommonInputsModel = yup.InferType<typeof CommonInputs>;
