import * as yup from 'yup';

import {
  COMMON_BID_MAKER_TYPES_INPUT,
  COMMON_DEADLINE_INPUT,
  COMMON_DIRECTION_INPUT,
  COMMON_MEDIATOR_INPUT,
  COMMON_MIN_FILTER_SUMMARY_INPUT,
  COMMON_MIN_FILTER_UNITS_INPUT,
  COMMON_OFFER_MAKER_TYPES_INPUT,
  COMMON_PRICE_INPUT,
  COMMON_SUMMARY_INPUT,
  COMMON_TELEGRAM_INPUT,
  COMMON_UNITS_INPUT,
  COMMON_PERMANENT_INPUT,
  COMMON_NO_LIMIT_INPUT,
  COMMON_PRICING_MODEL_INPUT,
} from '../inputs';

export const CommonInputs = yup.object({
  COMMON_BID_MAKER_TYPES_INPUT: COMMON_BID_MAKER_TYPES_INPUT.when('COMMON_NO_LIMIT_INPUT', {
    is: true,
    then: (field) => field.notRequired(),
    otherwise: (field) => field.min(1).required(),
  }),
  COMMON_NO_LIMIT_INPUT,
  COMMON_DEADLINE_INPUT: COMMON_DEADLINE_INPUT.when('COMMON_PERMANENT_INPUT', {
    is: true,
    then: (field) => field.nullable().notRequired(),
    otherwise: (field) => field.required(),
  }),
  COMMON_PERMANENT_INPUT,
  COMMON_DIRECTION_INPUT: COMMON_DIRECTION_INPUT.required().default('BUY'),
  COMMON_MEDIATOR_INPUT: COMMON_MEDIATOR_INPUT.required().default('OTC_AGENT'),
  COMMON_MIN_FILTER_SUMMARY_INPUT: COMMON_MIN_FILTER_SUMMARY_INPUT.when('COMMON_PRICING_MODEL_INPUT', {
    is: 'SUMMARY',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_MIN_FILTER_UNITS_INPUT: COMMON_MIN_FILTER_UNITS_INPUT.when('COMMON_PRICING_MODEL_INPUT', {
    is: 'UNITS',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_OFFER_MAKER_TYPES_INPUT: COMMON_OFFER_MAKER_TYPES_INPUT.min(1).required(),
  COMMON_PRICE_INPUT: COMMON_PRICE_INPUT.required(),
  COMMON_SUMMARY_INPUT: COMMON_SUMMARY_INPUT.when('COMMON_PRICING_MODEL_INPUT', {
    is: 'SUMMARY',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_TELEGRAM_INPUT: COMMON_TELEGRAM_INPUT.required(),
  COMMON_UNITS_INPUT: COMMON_UNITS_INPUT.when('COMMON_PRICING_MODEL_INPUT', {
    is: 'UNITS',
    then: (field) => field.required(),
    otherwise: (field) => field.notRequired(),
  }),
  COMMON_PRICING_MODEL_INPUT: COMMON_PRICING_MODEL_INPUT.default('SUMMARY'),
});

export type CommonInputsModel = yup.InferType<typeof CommonInputs>;
