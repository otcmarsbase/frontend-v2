import { LotTypeDictionary, TradeDirectionDictionary, AssetVerticalTitleDictionary } from '@app/dictionary';
import * as yup from 'yup';

export const QueryParamsSchema = yup.object({
  search: yup.string(),
  direction: yup.string().oneOf(TradeDirectionDictionary.keys()),
  type: yup.array().of(yup.string().oneOf(LotTypeDictionary.keys())),
  verticals: yup.array().of(yup.string().oneOf(AssetVerticalTitleDictionary.keys())),
  bidSize: yup.array().of(yup.number()),
  minBidSize: yup.array().of(yup.number()),
  targetValuation: yup.array().of(yup.number()),
  withReassign: yup.bool().transform((value) => (typeof value === 'boolean' ? value : value === '1' ? true : false)),
  assets: yup.array().of(yup.string()),
});
