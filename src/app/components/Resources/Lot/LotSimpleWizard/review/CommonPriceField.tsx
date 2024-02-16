import { createDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { LotCreateModel } from '../schema';

import { ReviewFieldDescriptor, StepReviewField } from './types';

const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, ReviewFieldDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Price per 0,01% equity',
    },
    SAFT: {
      label: 'Target token price',
    },
    TOKEN_WARRANT: {
      label: 'Price per 0,01% equity',
    },
    EQUITY: {
      label: 'Price per share',
    },
    UNLOCKED_TOKENS: {
      label: 'Price per token',
    },
  })
  .asReadonly();

export const CommonPriceField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.type).label}</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.COMMON_PRICE} format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
