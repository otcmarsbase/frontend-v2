import { createDictionary } from '../utils';

export const CurrencyType = ['USD'] as const;
export type CurrencyType = (typeof CurrencyType)[number];

export const CurrencySignDictionary = createDictionary<CurrencyType, string>().setFromRecord({
  USD: '$',
});
