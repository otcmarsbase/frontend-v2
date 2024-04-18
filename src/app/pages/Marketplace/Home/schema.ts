import {
  LotTypeDictionary,
  TradeDirectionDictionary,
  AssetVerticalTitleDictionary,
  AssetTierDictionary,
} from '@app/dictionary';
import * as yup from 'yup';

export const QueryParamsSchema = yup.object({
  search: yup.string(),
  direction: yup.string().oneOf(TradeDirectionDictionary.keys()),
  type: yup.array().of(yup.string().oneOf(LotTypeDictionary.keys())),
  verticals: yup.array().of(yup.string().oneOf(AssetVerticalTitleDictionary.keys())),
  minContractValue: yup.number(),
  maxContractValue: yup.number(),
  minBidSize: yup.number(),
  maxBidSize: yup.number(),
  minTargetValuation: yup.number(),
  maxTargetValuation: yup.number(),
  withReassign: yup.bool().transform((value) => (typeof value === 'boolean' ? value : value === '1' ? true : false)),
  assets: yup.array().of(yup.string()),
  tier: yup.array().of(yup.string().oneOf(AssetTierDictionary.keys())),
});
