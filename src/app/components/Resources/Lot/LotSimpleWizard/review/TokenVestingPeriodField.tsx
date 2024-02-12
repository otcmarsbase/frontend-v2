import { Text } from '@chakra-ui/react';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const TokenVestingPeriodField = {
  renderTitle: () => <Text>Vesting</Text>,
  renderValue: (model) => (
    <Text noOfLines={1} maxW="50%">
      {model.TOKEN_VESTING_PERIOD || '-'}
    </Text>
  ),
} satisfies StepReviewField<LotCreateModel>;
