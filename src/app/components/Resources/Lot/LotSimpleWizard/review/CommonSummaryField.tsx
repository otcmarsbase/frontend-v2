import { createDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { LotCreateModel } from '../schema';

import { ReviewFieldDescriptor, StepReviewField } from './types';

const DescriptorDictionary = createDictionary<DeskGatewaySchema.TradeDirection, ReviewFieldDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Deal Size',
    },
    SELL: {
      label: 'Size to offer',
    },
  })
  .asReadonly();

export const CommonSummaryField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.COMMON_DIRECTION).label}</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.COMMON_SUMMARY} format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
