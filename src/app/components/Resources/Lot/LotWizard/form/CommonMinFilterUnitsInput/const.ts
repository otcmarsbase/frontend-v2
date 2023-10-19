import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';

import { NumberInputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, NumberInputDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Minimum equity bid',
      placeholder: 'Amount',
      rightElementText: '%',
      tooltip: 'The minimum bid size (% equity)',
    },
    SAFT: {
      label: 'Minimum token bid',
      placeholder: 'Amount',
      tooltip: 'The minimum bid size',
    },
    TOKEN_WARRANT: {
      label: 'Minimum token share bid',
      placeholder: 'Amount',
      rightElementText: '%',
      tooltip: 'Minimum token share for 1 transaction',
    },
  })
  .asReadonly();
