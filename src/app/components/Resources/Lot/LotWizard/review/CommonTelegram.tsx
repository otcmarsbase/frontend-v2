import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const CommonTelegram = {
  renderTitle: () => <Text>Telegram</Text>,
  renderValue: (model) => <Text>@{model.COMMON_TELEGRAM}</Text>,
} satisfies StepReviewField<LotCreateModel>;
