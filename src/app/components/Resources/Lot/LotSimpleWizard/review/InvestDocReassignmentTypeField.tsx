import { LotReassignmentTypeDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const InvestDocReassignmentTypeField = {
  renderTitle: () => <Text>Available reassignment</Text>,
  renderValue: (model) => <Text>{LotReassignmentTypeDictionary.get(model.INVEST_DOC_REASSIGNMENT_TYPE)}</Text>,
} satisfies StepReviewField<LotCreateModel>;
