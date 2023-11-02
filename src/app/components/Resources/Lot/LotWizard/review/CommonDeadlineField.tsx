import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const CommonDeadlineField = {
  renderTitle: () => <Text>Deadline</Text>,
  renderValue: (model) =>
    !model.COMMON_DEADLINE || model.COMMON_IS_PERMANENT ? (
      <Text>Permanent</Text>
    ) : (
      <UIKit.DateText value={model.COMMON_DEADLINE} />
    ),
} satisfies StepReviewField<LotCreateModel>;
