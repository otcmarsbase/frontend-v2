import { UILogic } from '@app/components';
import { Text } from '@chakra-ui/react';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const CommonDirectionField = {
  renderTitle: () => <Text>Lot direction</Text>,
  renderValue: (model) => <UILogic.TradeDirectionText variant="ghost" value={model.COMMON_DIRECTION} />,
} satisfies StepReviewField<LotCreateModel>;
