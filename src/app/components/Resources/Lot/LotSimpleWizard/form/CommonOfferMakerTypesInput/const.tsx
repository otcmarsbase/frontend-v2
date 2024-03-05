import { createDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<DeskGatewaySchema.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Type of buyer',
      placeholder: 'Choose type',
    },
    SELL: {
      label: 'Real owner',
      placeholder: 'Choose type',
    },
  })
  .asReadonly();

export const BuyTooltipDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Who will be the owner of this asset'],
  [false, 'Which direct buyer type is most suitable'],
]);

export const SellTooltipDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Who is an owner of this asset'],
  [false, 'Which direct seller type is most suitable'],
]);
