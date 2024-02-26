import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, InputDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Deal Size',
      placeholder: 'Amount',
      tooltip: 'Contract size based on the target valuation of the deal. Total amount for buy',
    },
    SELL: {
      label: 'Deal Size',
      placeholder: 'Amount',
      tooltip: 'Contract size based on the target valuation of the deal. Total amount for sell',
    },
  })
  .asReadonly();
