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
      label: 'Minimum equity bid',
      addon: '%',
    },
    SAFT: {
      label: 'Minimum token bid',
    },
    TOKEN_WARRANT: {
      label: 'Minimum token share bid',
      addon: '%',
    },
  })
  .asReadonly();

export const CommonMinFilterUnitsField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.type).label}</Text>,
  renderValue(model) {
    const multiplicator = LotMultiplicatorDictionary.get(model.type).multiplicator;
    const value = model.COMMON_MIN_FILTER_UNITS
      ? new Decimal(model.COMMON_MIN_FILTER_UNITS).div(multiplicator).toString()
      : null;

    return <UIKit.PercentText value={value} percent={DescriptorDictionary.get(model.type).addon} format="0,0.X" />;
  },
} satisfies StepReviewField<LotCreateModel>;
