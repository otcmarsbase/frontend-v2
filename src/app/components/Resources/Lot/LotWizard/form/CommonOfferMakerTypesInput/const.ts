import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Offer maker',
      tooltip: 'Choose Buyer Type',
      placeholder: 'Choose type',
    },
    SELL: {
      label: 'Offer maker',
      tooltip: 'Choose Seller Type',
      placeholder: 'Choose type',
    },
  })
  .asReadonly();
