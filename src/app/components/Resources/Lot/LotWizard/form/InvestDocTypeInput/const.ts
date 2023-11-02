import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, InputDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Type of Lot',
      tooltip: 'Simple Agreement for Future Equity',
    },
    SAFT: {
      label: 'Type of Lot',
      tooltip: 'Simple Agreement for Future Tokens',
    },
    TOKEN_WARRANT: {
      label: 'Type of Lot',
      tooltip:
        'A financial instrument that grants the holder the right to purchase a specific quantity of tokens at a predetermined price within a specified timeframe.',
    },
  })
  .asReadonly();
