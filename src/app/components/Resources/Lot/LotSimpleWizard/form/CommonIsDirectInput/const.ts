import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'I am',
    },
    SELL: {
      label: 'Seller type',
    },
  })
  .asReadonly();

export const BuyChoicesDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Direct buyer'],
  [false, 'Broker'],
]);

export const SellChoicesDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Direct seller'],
  [false, 'Broker'],
]);
