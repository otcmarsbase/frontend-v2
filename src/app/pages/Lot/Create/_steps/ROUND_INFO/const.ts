import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../types';

export const RoundInfoFieldName = [
  'CONTRACT_VALUE',
  'DESCRIPTION',
  'ROUND',
  'ROUND_FDV',
  'IS_BEST_BID',
  'TOTAL_EQUITY_BOUGHT',
  'PRICE_PER_EQUITY',
  'PRICE_INFORMATION',
  'ESTIMATE_TGE_DATE',
  'TBD',
  'VESTING_CALENDAR',
] as const;
export type RoundInfoFieldName = (typeof RoundInfoFieldName)[number];

export const RoundInfoFieldsDictionary = createDictionary<RoundInfoFieldName, StepFieldInfo>()
  .setFromRecord({
    DESCRIPTION: {
      title: 'Description',
      placeholder: 'Enter description',
    },
    ROUND: {
      title: 'Investment round',
      placeholder: 'Choose type',
      tooltip: 'Choose the investment round.',
    },
    ROUND_FDV: {
      title: 'Round FDV',
      placeholder: 'Enter value',
      tooltip: 'Fully Diluted Valuation - total market capitalization of a cryptocurrency or token in specifitc round',
    },
    CONTRACT_VALUE: {
      title: 'Contract value',
      placeholder: 'Enter value',
      tooltip: 'What is the contract value($)?',
    },
    IS_BEST_BID: {
      title: 'Offer the best bid',
      placeholder: '',
    },
    TOTAL_EQUITY_BOUGHT: {
      title: 'Total equity bought ',
      placeholder: 'Amount',
      tooltip: 'Amount of equity share in total equity',
    },
    PRICE_PER_EQUITY: {
      title: 'Price per 0,01% equity',
      placeholder: 'Amount',
      tooltip: 'The price per 0,01% of equity.',
    },
    PRICE_INFORMATION: {
      title: 'Price information',
    },
    ESTIMATE_TGE_DATE: {
      title: 'Estimate TGE Date',
    },
    TBD: {
      title: 'TBD',
    },
    VESTING_CALENDAR: {
      title: 'Vesting calendar',
      placeholder: 'Enter amount',
      tooltip: 'Choose the investment round.',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
    tooltip: '',
  }))
  .asReadonly();
