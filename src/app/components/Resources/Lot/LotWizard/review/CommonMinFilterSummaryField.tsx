import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const CommonMinFilterSummaryField = {
  renderTitle: () => <Text>Minimum deal size</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.COMMON_MIN_FILTER_SUMMARY} format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
