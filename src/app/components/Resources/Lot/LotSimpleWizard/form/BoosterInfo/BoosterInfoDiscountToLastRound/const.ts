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
      label: 'Discount premium to last round',
      placeholder: 'Amount'
    }
  })
  .asReadonly();


export const RoundValueMap = {
  PRESEED: 1,
  SEED: 2,
  PRESALE: 3,
  ROUND_A: 4,
  ROUND_B: 5,
  ROUND_C: 6,
  PRIVATE: 7,
  FUNDING_ROUND: 8,
}
