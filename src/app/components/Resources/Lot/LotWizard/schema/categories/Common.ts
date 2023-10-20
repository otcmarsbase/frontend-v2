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
  COMMON_PRICING_MODEL,
} from '../inputs';

export const CommonInputs = yup.object({
  COMMON_BID_MAKER_TYPES: COMMON_BID_MAKER_TYPES.when('COMMON_IS_NO_LIMIT', {
    is: true,
    then: (field) => field.notRequired(),
    otherwise: (field) => field.min(1).required(),
  }),
  COMMON_IS_NO_LIMIT,
  COMMON_DEADLINE: COMMON_DEADLINE.when('COMMON_IS_PERMANENT', {
    is: true,
    then: (field) => field,
    otherwise: (field) => field.required(),
  }),
  COMMON_IS_PERMANENT,
  COMMON_DIRECTION: COMMON_DIRECTION.required().default('BUY'),
  COMMON_IS_DIRECT,
  COMMON_MIN_FILTER_SUMMARY: COMMON_MIN_FILTER_SUMMARY.when('COMMON_PRICING_MODEL', {
    is: 'SUMMARY',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_MIN_FILTER_UNITS: COMMON_MIN_FILTER_UNITS.when('COMMON_PRICING_MODEL', {
    is: 'UNITS',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_OFFER_MAKER_TYPES: COMMON_OFFER_MAKER_TYPES.min(1).required(),
  COMMON_PRICE: COMMON_PRICE.required(),
  COMMON_SUMMARY: COMMON_SUMMARY.when('COMMON_PRICING_MODEL', {
    is: 'SUMMARY',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_TELEGRAM: COMMON_TELEGRAM.required(),
  COMMON_UNITS: COMMON_UNITS.when('COMMON_PRICING_MODEL', {
    is: 'UNITS',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_PRICING_MODEL: COMMON_PRICING_MODEL.default('SUMMARY'),
});

export type CommonInputsModel = yup.InferType<typeof CommonInputs>;
