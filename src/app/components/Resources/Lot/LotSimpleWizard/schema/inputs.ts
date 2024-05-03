import { LotReassignmentTypeDictionary, ParticipantTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { InputTelegramRegex } from '@shared/ui-kit';
import { CustomStringScheme } from '@shared/yup-custom-validators';
import * as yup from 'yup';

export const COMMON_PRICE = yup.string();
export const COMMON_DIRECTION = yup.string().oneOf(TradeDirectionDictionary.keys());
export const COMMON_IS_DIRECT = yup.bool();
export const COMMON_TELEGRAM = yup
  .string()
  .matches(InputTelegramRegex, 'Telegram username is not valid')
  .min(5)
  .max(32);

export const COMMON_OFFER_MAKER_TYPES = yup.string().oneOf(ParticipantTypeDictionary.keys());
export const COMMON_UNITS = yup.string();
export const COMMON_SUMMARY = new CustomStringScheme();
export const COMMON_MIN_FILTER_SUMMARY = new CustomStringScheme();
export const COMMON_ADDITIONAL_INFO = yup.string().max(1000);

export const INVEST_DOC_ASSET_PK = yup
  .object({ id: yup.string() })
  .transform((_, originalValue) => (typeof originalValue === 'string' ? { id: originalValue } : originalValue));
export const INVEST_DOC_ASSET_CREATE_REQUEST = yup.object({
  title: yup.string().required(),
  website: yup.string().default(''),
  pitchDeck:  yup.lazy(value => !value ? yup.string().default('') : yup.string().url()),
  tokenomics: yup.lazy(value => !value ? yup.string().default('') : yup.string().url()),
});
export const INVEST_DOC_ASSET = yup.lazy((value) =>
  typeof value === 'string' || value?.id || !Boolean(value)
    ? INVEST_DOC_ASSET_PK.required()
    : INVEST_DOC_ASSET_CREATE_REQUEST.required(),
);
export const INVEST_DOC_REASSIGNMENT_TYPE = yup.string().oneOf(LotReassignmentTypeDictionary.keys());
export const INVEST_DOC_FDV = yup.string();
export const TOKEN_VESTING_PERIOD = yup.string();

export const SAFE_WITH_TOKEN_WARRANT = yup.bool();
