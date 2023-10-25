import { InvestmentRoundDictionary, ParticipantTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { InputWebsiteRegex } from '@shared/ui-kit';
import * as yup from 'yup';

export const COMMON_PRICE = yup.string();
export const COMMON_DIRECTION = yup.string().oneOf(TradeDirectionDictionary.keys());
export const COMMON_IS_DIRECT = yup.bool();
export const COMMON_TELEGRAM = yup
  .string()
  .matches(/.*\B(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/g, 'Telegram username must starts with @ and be valid')
  .min(5)
  .max(32);
export const COMMON_DEADLINE = yup
  .number()
  .nullable()
  .transform((_, originalValue) => (originalValue instanceof Date ? originalValue.valueOf() : originalValue));
export const COMMON_IS_PERMANENT = yup.bool();
export const COMMON_OFFER_MAKER_TYPES = yup.array().of(yup.string().oneOf(ParticipantTypeDictionary.keys()));
export const COMMON_BID_MAKER_TYPES = yup.array().of(yup.string().oneOf(ParticipantTypeDictionary.keys()));
export const COMMON_IS_NO_LIMIT = yup.bool();
export const COMMON_UNITS = yup.string();
export const COMMON_SUMMARY = yup.string();
export const COMMON_MIN_FILTER_UNITS = yup.string();
export const COMMON_MIN_FILTER_SUMMARY = yup.string();
export const COMMON_PRICING_MODEL = yup.string().oneOf(['SUMMARY', 'UNITS']);

export const INVEST_DOC_ASSET_PK = yup
  .object({ id: yup.string() })
  .transform((_, originalValue) => (typeof originalValue === 'string' ? { id: originalValue } : originalValue));
export const INVEST_DOC_ASSET_CREATE_REQUEST = yup.object({
  title: yup.string().required(),
  website: yup.string().matches(InputWebsiteRegex).required(),
});
export const INVEST_DOC_ASSET = yup.lazy((value) =>
  typeof value === 'string' || value?.id || !Boolean(value)
    ? INVEST_DOC_ASSET_PK.required()
    : INVEST_DOC_ASSET_CREATE_REQUEST.required(),
);
export const INVEST_DOC_WITH_REASSIGN = yup.bool();
export const INVEST_DOC_FDV = yup.string();
export const INVEST_DOC_SHARE = yup.number();
export const INVEST_DOC_RATIO = yup.number();

export const INVEST_DOC_ROUND_TYPE = yup.string().oneOf(InvestmentRoundDictionary.keys());
export const INVEST_DOC_ROUND_PRICE = yup.string();
export const INVEST_DOC_ROUND_UNITS = yup.string();
export const INVEST_DOC_ROUND_FDV = yup.string();
export const INVEST_DOC_ROUND_SHARE = yup.number();
export const INVEST_DOC_ROUND_SUMMARY = yup.string();

export const TOKEN_TGE = yup
  .mixed<number | 'TBD'>()
  .nullable()
  .transform((_, originalValue) => (originalValue instanceof Date ? originalValue.valueOf() : originalValue));
export const TOKEN_LOCKUP_PERIOD = yup.string();
export const TOKEN_VESTING_PERIOD = yup.string();
export const TOKEN_TGE_IS_TBD = yup.bool();
export const TOKEN_IS_ALREADY_OVER = yup.bool();

export const SAFE_WITH_TOKEN_WARRANT = yup.bool();
