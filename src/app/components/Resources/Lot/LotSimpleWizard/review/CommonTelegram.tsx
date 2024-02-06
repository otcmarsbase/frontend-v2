import { Text } from '@chakra-ui/react';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const CommonTelegram = {
  renderTitle: () => <Text>Telegram</Text>,
  renderValue: (model) => <Text>@{model.COMMON_TELEGRAM}</Text>,
} satisfies StepReviewField<LotCreateModel>;
