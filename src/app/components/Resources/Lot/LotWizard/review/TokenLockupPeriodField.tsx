import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const TokenLockupPeriodField = {
  renderTitle: () => <Text>Lockup period</Text>,
  renderValue: (model) => <Text>{model.TOKEN_LOCKUP_PERIOD ? `${model.TOKEN_LOCKUP_PERIOD} months` : '-'}</Text>,
} satisfies StepReviewField<LotCreateModel>;
