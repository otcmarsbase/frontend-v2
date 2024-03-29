import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const InvestDocFdvField = {
  renderTitle: () => <Text>Target valuation</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.INVEST_DOC_FDV} format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
