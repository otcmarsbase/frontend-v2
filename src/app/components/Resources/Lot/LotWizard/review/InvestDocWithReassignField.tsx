import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const InvestDocWithReassignField = {
  renderTitle: () => <Text>With re-assign</Text>,
  renderValue: (model) => <Text>{model.INVEST_DOC_WITH_REASSIGN ? 'Yes' : 'No'}</Text>,
} satisfies StepReviewField<LotCreateModel>;
