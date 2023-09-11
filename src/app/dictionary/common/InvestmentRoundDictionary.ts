import { Resource } from '@schema/api-gateway';

import { createDictionary } from '../utils';

export interface InvestmentRoundDictionaryInfo {
  title: string;
}

export const InvestmentRoundDictionary = createDictionary<Resource.Common.RoundType, InvestmentRoundDictionaryInfo>()
  .setFromRecord({
    SEED: {
      title: 'Seed',
    },
    PRESALE: {
      title: 'Presale',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
