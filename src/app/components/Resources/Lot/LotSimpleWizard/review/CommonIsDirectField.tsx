import { createDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { LotCreateModel } from '../schema';

import { StepReviewField, ReviewFieldDescriptor } from './types';

const DescriptorDictionary = createDictionary<DeskGatewaySchema.TradeDirection, ReviewFieldDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Is direct buyer',
    },
    SELL: {
      label: 'Is direct seller',
    },
  })
  .asReadonly();

export const CommonIsDirectField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.COMMON_DIRECTION).label}</Text>,
  renderValue: (model) => <Text>{model.COMMON_IS_DIRECT ? 'Yes' : 'No'}</Text>,
} satisfies StepReviewField<LotCreateModel>;
