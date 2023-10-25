import { Text } from '@chakra-ui/react';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const TokenVestingPeriodField = {
  renderTitle: () => <Text>Vesting period</Text>,
  renderValue: (model) => <Text>{model.TOKEN_VESTING_PERIOD ? `${model.TOKEN_VESTING_PERIOD} months` : '-'}</Text>,
} satisfies StepReviewField<LotCreateModel>;
