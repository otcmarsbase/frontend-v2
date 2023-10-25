import { UILogic } from '@app/components';
import { createDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

import { ReviewFieldDescriptor } from './types';

const DescriptorDictionary = createDictionary<Resource.Common.Enums.TradeDirection, ReviewFieldDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Type of seller',
    },
    SELL: {
      label: 'Type of buyer',
    },
  })
  .asReadonly();

export const CommonBidMakerTypesField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.COMMON_DIRECTION).label}</Text>,
  renderValue: (model) =>
    model.COMMON_IS_NO_LIMIT || !model.COMMON_BID_MAKER_TYPES.length ? (
      <Text color="orange.500">No limitations</Text>
    ) : (
      <UILogic.ParticipantTypesText value={model.COMMON_BID_MAKER_TYPES} />
    ),
} satisfies StepReviewField<LotCreateModel>;
