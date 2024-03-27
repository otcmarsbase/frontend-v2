import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const CommonMinFilterSummaryField = {
  renderTitle: () => <Text>Minimum deal</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.COMMON_MIN_FILTER_SUMMARY} format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
