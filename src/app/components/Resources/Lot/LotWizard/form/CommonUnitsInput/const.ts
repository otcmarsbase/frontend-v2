import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';

import { NumberInputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, NumberInputDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Equity to offer',
      placeholder: 'Amount',
      rightElementText: '%',
      tooltip: 'How much equity of the company/project is being sold in this lot?',
    },
    SAFT: {
      label: 'Tokens to offer',
      placeholder: 'Amount',
      tooltip: 'Total number of tokens you want to sell',
    },
    TOKEN_WARRANT: {
      label: 'Token share to offer',
      placeholder: 'Amount',
      rightElementText: '%',
      tooltip: 'How much token share of total supply you want to sell',
    },
  })
  .asReadonly();
