import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { LotTargetValuation } from '../../LotTargetValuation';
import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const InvestDocFdvField = {
  renderTitle: () => <Text>Target valuation</Text>,
  renderValue: (model) => <LotTargetValuation value={model.INVEST_DOC_FDV} />,
} satisfies StepReviewField<LotCreateModel>;
