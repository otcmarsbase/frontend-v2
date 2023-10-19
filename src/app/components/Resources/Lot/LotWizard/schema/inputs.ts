import {
  InvestmentRoundDictionary,
  MediatorTypeDictionary,
  ParticipantTypeDictionary,
  TradeDirectionDictionary,
} from '@app/dictionary';
import * as yup from 'yup';

export const COMMON_PRICE_INPUT = yup.string();
export const COMMON_DIRECTION_INPUT = yup.string().oneOf(TradeDirectionDictionary.keys());
export const COMMON_MEDIATOR_INPUT = yup.string().oneOf(MediatorTypeDictionary.keys());
export const COMMON_TELEGRAM_INPUT = yup
  .string()
  .matches(/^[a-zA-Z][a-zA-Z0-9_]*$/g)
  .min(5)
  .max(32);
export const COMMON_DEADLINE_INPUT = yup.date();
export const COMMON_PERMANENT_INPUT = yup.bool();
export const COMMON_OFFER_MAKER_TYPES_INPUT = yup.array().of(yup.string().oneOf(ParticipantTypeDictionary.keys()));
export const COMMON_BID_MAKER_TYPES_INPUT = yup.array().of(yup.string().oneOf(ParticipantTypeDictionary.keys()));
export const COMMON_NO_LIMIT_INPUT = yup.bool();
export const COMMON_UNITS_INPUT = yup.string();
export const COMMON_SUMMARY_INPUT = yup.string();
export const COMMON_MIN_FILTER_UNITS_INPUT = yup.string();
export const COMMON_MIN_FILTER_SUMMARY_INPUT = yup.string();
export const COMMON_PRICING_MODEL_INPUT = yup.string().oneOf(['SUMMARY', 'UNITS']);

export const INVEST_DOC_ASSET_PK_INPUT = yup.string();
export const INVEST_DOC_ASSET_CREATE_REQUEST_INPUT = yup.object({
  title: yup.string(),
  website: yup.string().url(),
});
export const INVEST_DOC_WITH_REASSIGN_INPUT = yup.bool();
export const INVEST_DOC_FDV_INPUT = yup.string();
export const INVEST_DOC_SHARE_INPUT = yup.string();
export const INVEST_DOC_ROUND_TYPE_INPUT = yup.string().oneOf(InvestmentRoundDictionary.keys());
export const INVEST_DOC_ROUND_PRICE_INPUT = yup.string();
export const INVEST_DOC_ROUND_UNITS_INPUT = yup.string();
export const INVEST_DOC_ROUND_FDV_INPUT = yup.string();
export const INVEST_DOC_ROUND_SHARE_INPUT = yup.number();
export const INVEST_DOC_ROUND_SUMMARY_INPUT = yup.number();

export const SAFE_WITH_TOKEN_WARRANT_INPUT = yup.bool();

export const TOKEN_TGE_INPUT = yup
  .mixed<number | 'TBD'>()
  .transform((value) => (value instanceof Date ? value.valueOf() : value));
export const TOKEN_LOCKUP_PERIOD_INPUT = yup.string();
export const TOKEN_VESTING_PERIOD_INPUT = yup.string();
