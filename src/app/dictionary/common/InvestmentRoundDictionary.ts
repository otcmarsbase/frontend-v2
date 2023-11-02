import { Resource } from '@schema/desk-gateway';

import { createDictionary } from '../utils';

export interface InvestmentRoundDictionaryInfo {
  title: string;
}

export const InvestmentRoundDictionary = createDictionary<
  Resource.Common.Enums.InvestRound,
  InvestmentRoundDictionaryInfo
>()
  .setFromRecord({
    SEED: {
      title: 'Seed',
    },
    PRESALE: {
      title: 'Presale',
    },
    PRESEED: {
      title: 'Preseed',
    },
    ROUND_A: {
      title: 'Round A',
    },
    ROUND_B: {
      title: 'Round B',
    },
    ROUND_C: {
      title: 'Round C',
    },
    PRIVATE: {
      title: 'Private',
    },
    FUNDING_ROUND: {
      title: 'Funding round',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
