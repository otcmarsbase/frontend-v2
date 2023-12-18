import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { NumberInputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, NumberInputDescriptor>()
  .setFromRecord({
    SAFE: {
      placeholder: 'Amount',
      rightElementText: '%',
    },
    SAFT: {
      placeholder: 'Amount',
    },
    TOKEN_WARRANT: {
      placeholder: 'Amount',
      rightElementText: '%',
    },
  })
  .asReadonly();
