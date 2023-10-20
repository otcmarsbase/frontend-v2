import { createDictionary } from '@app/dictionary';

import { LotWizardStepField } from '../../../../types';

export const LotInfoFieldName = ['PRICING_MODEL', 'FDV', 'PRICE'] as const;
export type LotInfoFieldName = (typeof LotInfoFieldName)[number];

export const LotInfoFieldsDictionary = createDictionary<LotInfoFieldName, LotWizardStepField>()
  .setFromRecord({
    PRICING_MODEL: {
      title: 'Pricing model',
      tooltip: 'You can choose the pricing model in a stablecoin or in equity.',
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
