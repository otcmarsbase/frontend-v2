import { createDictionary } from '@app/dictionary';

import { LotWizardStepField } from '../../../../types';

export const RoundInfoFieldName = [
  'CONTRACT_VALUE',
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

export const RoundInfoFieldsDictionary = createDictionary<RoundInfoFieldName, LotWizardStepField>()
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
    ESTIMATE_TGE_DATE: {
      title: 'Dates',
      placeholder: 'Estimated TGE Date',
      tooltip:
        'TGE (Token Generation Event). Date whena cryptocurrency or blockchain project generates and distributes its tokens to initial investors, contributors, or participants.',
    },
    IS_TBD: {
      title: 'TBD',
      tooltip: 'It indicates that the date for the distribution of tokens is still unknown.',
    },
    LOCKUP_PERIOD: {
      title: 'Lockup period',
      placeholder: 'Enter amount',
      tooltip:
        'A lockup period is a specific duration of time during which certain individuals or entities, typically early investors, founders, or team members, are restricted from selling or transferring their vested tokens or shares.',
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
      title: 'Tokens bought',
      placeholder: 'Amount',
      tooltip: 'Number of tokens you received in this round',
    },
    PRICE_PER_EQUITY: {
      title: 'Price per token',
      placeholder: 'Amount',
      tooltip: 'At what price you received tokens',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
