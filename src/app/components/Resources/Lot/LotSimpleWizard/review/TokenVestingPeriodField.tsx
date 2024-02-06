import { Text } from '@chakra-ui/react';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const TokenVestingPeriodField = {
  renderTitle: () => <Text>Vesting</Text>,
  renderValue: (model) => <Text>{model.TOKEN_VESTING_PERIOD || '-'}</Text>,
} satisfies StepReviewField<LotCreateModel>;
