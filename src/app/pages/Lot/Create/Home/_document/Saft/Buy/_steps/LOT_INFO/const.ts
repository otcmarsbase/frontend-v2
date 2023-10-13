import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../../../../../types';

export const LotInfoFieldName = ['PRICING_MODEL', 'FDV', 'PRICE'] as const;
export type LotInfoFieldName = (typeof LotInfoFieldName)[number];

export const LotInfoFieldsDictionary = createDictionary<LotInfoFieldName, StepFieldInfo>()
  .setFromRecord({
    PRICING_MODEL: {
      title: 'Pricing model',
      tooltip: 'You can choose the pricing model in a stablecoin or in tokens.',
    },
    FDV: {
      title: 'Target FDV',
      tooltip: 'FDV = market price * maximum supply',
    },
    PRICE: {
      title: 'Target token price',
      tooltip: 'The price of the token you want to sell it',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
