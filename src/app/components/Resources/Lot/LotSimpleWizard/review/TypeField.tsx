import { UILogic } from '@app/components';
import { Text } from '@chakra-ui/react';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const TypeField = {
  renderTitle: () => <Text>Type of lot</Text>,
  renderValue: (model) => <UILogic.LotTypeChip value={model.type} withTokenWarrant={model.SAFE_WITH_TOKEN_WARRANT} />,
} satisfies StepReviewField<LotCreateModel>;
