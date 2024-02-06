import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const CommonSummaryField = {
  renderTitle: () => <Text>Contract size to offer</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.COMMON_SUMMARY} format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
