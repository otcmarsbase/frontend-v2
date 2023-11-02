import { createDictionary, LotMultiplicatorDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

import { ReviewFieldDescriptor } from './types';

const DescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, ReviewFieldDescriptor>()
  .setFromRecord({
    SAFE: {
      label: 'Equity to offer',
      addon: '%',
    },
    SAFT: {
      label: 'Tokens to offer',
    },
    TOKEN_WARRANT: {
      label: 'Token share to offer',
      addon: '%',
    },
  })
  .asReadonly();

export const CommonUnitsField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.type).label}</Text>,
  renderValue(model) {
    const multiplicator = LotMultiplicatorDictionary.get(model.type).multiplicator;
    const value = model.COMMON_UNITS ? new Decimal(model.COMMON_UNITS).div(multiplicator).toString() : null;

    return <UIKit.MoneyText value={value} addon={DescriptorDictionary.get(model.type).addon} format="0,0.X" />;
  },
} satisfies StepReviewField<LotCreateModel>;
