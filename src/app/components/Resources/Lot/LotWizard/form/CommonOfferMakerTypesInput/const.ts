import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Type of buyer',
      tooltip: 'Choose Buyer Type',
      placeholder: 'Choose type',
    },
    SELL: {
      label: 'Type of seller',
      tooltip: 'Choose Seller Type',
      placeholder: 'Choose type',
    },
  })
  .asReadonly();
