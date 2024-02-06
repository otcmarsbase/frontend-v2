import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Deal Size',
      placeholder: 'Amount',
    },
    SELL: {
      label: 'Size to offer',
      placeholder: 'Amount',
    },
  })
  .asReadonly();
