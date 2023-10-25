import { createDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

import { ReviewFieldDescriptor } from './types';

const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, ReviewFieldDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Price per 0,01% equity',
      addon: '$',
    },
    SAFT: {
      label: 'Target token price',
      addon: '$',
    },
    TOKEN_WARRANT: {
      label: 'Price per 0,01% equity',
      addon: '$',
    },
  })
  .asReadonly();

export const CommonPriceField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.type).label}</Text>,
  renderValue: (model) => (
    <UIKit.MoneyText value={model.COMMON_PRICE} addon={DescriptorDictionary.get(model.type).addon} format="0,0.X" />
  ),
} satisfies StepReviewField<LotCreateModel>;
