import { UILogic } from '@app/components';
import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const InvestDocRoundTypeField = {
  renderTitle: () => <Text>Investment round</Text>,
  renderValue: (model) => <UILogic.InvestmentRoundBadge value={model.INVEST_DOC_ROUND_TYPE} />,
} satisfies StepReviewField<LotCreateModel>;
