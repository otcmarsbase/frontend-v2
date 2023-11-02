import { UILogic } from '@app/components';
import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const TypeField = {
  renderTitle: () => <Text>Type of lot</Text>,
  renderValue: (model) => <UILogic.LotTypeChip value={model.type} withTokenWarrant={model.SAFE_WITH_TOKEN_WARRANT} />,
} satisfies StepReviewField<LotCreateModel>;
