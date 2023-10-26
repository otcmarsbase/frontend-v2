import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const TokenLockupPeriodField = {
  renderTitle: () => <Text>Lockup period</Text>,
  renderValue: (model) => <Text>{model.TOKEN_LOCKUP_PERIOD || '-'}</Text>,
} satisfies StepReviewField<LotCreateModel>;