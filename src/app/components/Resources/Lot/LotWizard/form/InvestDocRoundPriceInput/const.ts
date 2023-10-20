import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';

import { NumberInputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, NumberInputDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Price per 0,01% equity',
      placeholder: 'Amount',
      rightElementText: '$',
      tooltip: 'The price per 0,01% of equity.',
    },
    SAFT: {
      label: 'Price per token',
      placeholder: 'Amount',
      rightElementText: '$',
      tooltip: 'At what price you received tokens',
    },
    TOKEN_WARRANT: {
      label: 'Price per 0,01% tokens',
      placeholder: 'Amount',
      rightElementText: '$',
      tooltip: 'The price per 0,01% of tokens.',
    },
  })
  .asReadonly();
