import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../../../../../types';

export const RoundInfoFieldName = [
  'CONTRACT_VALUE',
  'DESCRIPTION',
  'ROUND',
  'ROUND_FDV',
  'ESTIMATE_TGE_DATE',
  'IS_TBD',
  'LOCKUP_PERIOD',
  'ALREADY_OVER',
  'VESTING_CALENDAR',
  'TOTAL_EQUITY_BOUGHT',
  'PRICE_PER_EQUITY',
  'PRICE_INFORMATION',
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
    },
    ROUND_FDV: {
      title: 'Round FDV',
      placeholder: 'Enter value',
    },
    CONTRACT_VALUE: {
      title: 'Contract value',
      placeholder: 'Enter value',
    },
    ESTIMATE_TGE_DATE: {
      title: 'Dates',
      placeholder: 'Estimated TGE Date',
    },
    IS_TBD: {
      title: 'TBD',
    },
    LOCKUP_PERIOD: {
      title: 'Lockup period',
      placeholder: 'Enter amount',
    },
    ALREADY_OVER: {
      title: 'Already over',
    },
    VESTING_CALENDAR: {
      title: 'Vesting calendar',
      placeholder: 'Enter amount',
    },
    PRICE_INFORMATION: {
      title: 'Price information',
    },
    TOTAL_EQUITY_BOUGHT: {
      title: 'Total equity bought ',
      placeholder: 'Amount',
    },
    PRICE_PER_EQUITY: {
      title: 'Price per 0,01% equity',
      placeholder: 'Amount',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
