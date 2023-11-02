import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

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
      label: 'Target token price',
      placeholder: 'Amount',
      rightElementText: '$',
      tooltip: 'The price of the token',
    },
    TOKEN_WARRANT: {
      label: 'Price per 0,01% tokens',
      placeholder: 'Amount',
      rightElementText: '$',
      tooltip: 'The price per 0,01% of tokens.',
    },
  })
  .asReadonly();
