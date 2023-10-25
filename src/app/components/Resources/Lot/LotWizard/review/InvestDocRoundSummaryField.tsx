import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const InvestDocRoundSummaryField = {
  renderTitle: () => <Text>Contract value</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.COMMON_SUMMARY} addon="$" format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
