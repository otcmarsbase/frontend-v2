import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, InputDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Price per 0,01% equity',
      placeholder: 'Amount',
    },
    SAFT: {
      label: 'Target token price',
      placeholder: 'Amount',
    },
    TOKEN_WARRANT: {
      label: 'Price per 0,01% equity',
      placeholder: 'Amount',
    },
    EQUITY: {
      label: 'Price per share',
      placeholder: 'Amount',
    },
    UNLOCKED_TOKENS: {
      label: 'Price per token',
      placeholder: 'Amount',
    },
  })
  .asReadonly();
