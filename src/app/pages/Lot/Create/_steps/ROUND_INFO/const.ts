import { createDictionary } from '@app/dictionary';

export const RoundInfoFieldName = [
  'CONTRACT_VALUE',
  'DESCRIPTION',
  'ROUND',
  'ROUND_FDV',
  'IS_BEST_BID',
  'TOTAL_EQUITY_BOUGHT',
  'PRICE_PER_EQUITY',
  'PRICE_INFORMATION',
] as const;
export type RoundInfoFieldName = (typeof RoundInfoFieldName)[number];
export type RoundInfoFieldsDictionaryInfo = {
  title: string;
  placeholder?: string;
};

export const RoundInfoFieldsDictionary = createDictionary<RoundInfoFieldName, RoundInfoFieldsDictionaryInfo>()
  .setFromRecord({
    DESCRIPTION: {
      title: 'Description',
      placeholder: 'Enter description',
    },
    ROUND: {
      title: 'Investment round',
      placeholder: 'Choose type',
    },
    ROUND_FDV: {
      title: 'Round FDV',
      placeholder: 'Enter value',
    },
    CONTRACT_VALUE: {
      title: 'Contract value',
      placeholder: 'Enter value',
    },
    IS_BEST_BID: {
      title: 'Offer the best bid',
      placeholder: '',
    },
    TOTAL_EQUITY_BOUGHT: {
      title: 'Total equity bought ',
      placeholder: 'Amount',
    },
    PRICE_PER_EQUITY: {
      title: 'Price per 0,01% equity',
      placeholder: 'Amount',
    },
    PRICE_INFORMATION: {
      title: 'Price information',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
