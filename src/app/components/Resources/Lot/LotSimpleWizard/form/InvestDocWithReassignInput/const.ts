import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Available reassignment',
      tooltip: 'Process of transfering economic rights to buyer. For better understanding read OTC guide',
    },
    SELL: {
      label: 'Available reassignment',
      tooltip: 'Process of transfering economic rights to buyer.',
    },
  })
  .asReadonly();
