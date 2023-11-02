import { UILogic } from '@app/components';
import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const CommonDirectionField = {
  renderTitle: () => <Text>Trade direction</Text>,
  renderValue: (model) => <UILogic.TradeDirectionText variant="ghost" value={model.COMMON_DIRECTION} />,
} satisfies StepReviewField<LotCreateModel>;
