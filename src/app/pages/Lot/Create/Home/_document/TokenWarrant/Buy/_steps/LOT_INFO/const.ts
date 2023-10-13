import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../../../../../types';

export const LotInfoFieldName = ['PRICING_MODEL', 'FDV', 'PRICE'] as const;
export type LotInfoFieldName = (typeof LotInfoFieldName)[number];

export const LotInfoFieldsDictionary = createDictionary<LotInfoFieldName, StepFieldInfo>()
  .setFromRecord({
    PRICING_MODEL: {
      title: 'Pricing model',
      tooltip: 'You can choose the pricing model in a stablecoin or in token shares.',
    },
    FDV: {
      title: 'Target FDV',
      tooltip: 'FDV = market price * maximum supply',
    },
    PRICE: {
      title: 'Price per 0,01% equity',
      tooltip: 'The price per 0,01% of equity.',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
