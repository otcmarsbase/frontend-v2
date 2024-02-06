import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Type of buyer',
      placeholder: 'Choose type',
    },
    SELL: {
      label: 'Real owner',
      placeholder: 'Choose type',
    },
  })
  .asReadonly();
