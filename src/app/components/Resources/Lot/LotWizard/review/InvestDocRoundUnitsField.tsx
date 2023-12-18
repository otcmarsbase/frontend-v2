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
      label: 'Total equity bought',
      addon: '%',
    },
    SAFT: {
      label: 'Tokens bought',
    },
    TOKEN_WARRANT: {
      label: 'Tokens share bought',
      addon: '%',
    },
  })
  .asReadonly();

export const InvestDocRoundUnitsField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.type).label}</Text>,
  renderValue(model) {
    const multiplicator = LotMultiplicatorDictionary.get(model.type).multiplicator;
    const value = model.INVEST_DOC_ROUND_UNITS
      ? new Decimal(model.INVEST_DOC_ROUND_UNITS).div(multiplicator).toString()
      : null;

    return <UIKit.PercentText value={value} percent={DescriptorDictionary.get(model.type).addon} format="0,0.X" />;
  },
} satisfies StepReviewField<LotCreateModel>;
