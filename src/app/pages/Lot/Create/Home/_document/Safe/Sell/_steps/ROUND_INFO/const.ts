import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../../../../../types';

export const RoundInfoFieldName = [
  'CONTRACT_VALUE',
  'ROUND',
  'ROUND_FDV',
  'TOTAL_EQUITY_BOUGHT',
  'PRICE_PER_EQUITY',
  'PRICE_INFORMATION',
] as const;
export type RoundInfoFieldName = (typeof RoundInfoFieldName)[number];

export const RoundInfoFieldsDictionary = createDictionary<RoundInfoFieldName, StepFieldInfo>()
  .setFromRecord({
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
    PRICE_INFORMATION: {
      title: 'Price information',
    },
    TOTAL_EQUITY_BOUGHT: {
      title: 'Total equity bought',
      placeholder: 'Amount',
      tooltip: 'Amount of equity share in total equity',
    },
    PRICE_PER_EQUITY: {
      title: 'Price per 0,01% equity',
      placeholder: 'Amount',
      tooltip: 'The price per 0,01% of equity.',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
