import { Text } from '@chakra-ui/react';

import { LotCreateModel } from '../schema';

import { StepReviewField } from './types';

export const CommonAdditionalInfoField = {
  renderTitle: () => <Text>Additional info</Text>,
  renderValue: (model) => (
    <Text noOfLines={1} maxW="50%">
      {model.COMMON_ADDITIONAL_INFO || '-'}
    </Text>
  ),
} satisfies StepReviewField<LotCreateModel>;
