import { createDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { InputDescriptor } from '../../types';

export const DescriptorDictionary = createDictionary<
  DeskGatewaySchema.TradeDirection,
  InputDescriptor
>()
  .setFromRecord({
    BUY: {},
    SELL: {
      label: 'Project pitchdeck',
      placeholder: 'Link'
    }
  })
  .asReadonly();
