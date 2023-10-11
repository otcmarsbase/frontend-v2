import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../../../../../types';

export const LotInfoFieldName = ['PRICING_MODEL', 'FDV', 'PRICE'] as const;
export type LotInfoFieldName = (typeof LotInfoFieldName)[number];

export const LotInfoFieldsDictionary = createDictionary<LotInfoFieldName, StepFieldInfo>()
  .setFromRecord({
    PRICING_MODEL: {
      title: 'Pricing model',
    },
    FDV: {
      title: 'Target FDV',
    },
    PRICE: {
      title: 'Price per 0,01% equity',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
