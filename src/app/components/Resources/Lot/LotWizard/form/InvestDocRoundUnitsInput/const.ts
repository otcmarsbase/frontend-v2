import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';

import { NumberInputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, NumberInputDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Total equity bought',
      placeholder: 'Amount',
      rightElementText: '%',
      tooltip: 'Amount of equity share in total equity',
    },
    SAFT: {
      label: 'Tokens bought',
      placeholder: 'Amount',
      tooltip: 'Number of tokens you received in this round',
    },
    TOKEN_WARRANT: {
      label: 'Tokens share bought',
      placeholder: 'Amount',
      rightElementText: '%',
      tooltip: 'How much token share of total supply you have?',
    },
  })
  .asReadonly();
