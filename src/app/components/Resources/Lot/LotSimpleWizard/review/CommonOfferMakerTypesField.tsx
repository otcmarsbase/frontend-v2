import { UILogic } from '@app/components';
import { createDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { LotCreateModel } from '../schema';

import { StepReviewField, ReviewFieldDescriptor } from './types';

const DescriptorDictionary = createDictionary<DeskGatewaySchema.TradeDirection, ReviewFieldDescriptor>()
  .setFromRecord({
    BUY: {
      label: 'Offer maker',
    },
    SELL: {
      label: 'Offer maker',
    },
  })
  .asReadonly();

export const CommonOfferMakerTypesField = {
  renderTitle: (model) => <Text>{DescriptorDictionary.get(model.COMMON_DIRECTION).label}</Text>,
  renderValue: (model) => <UILogic.ParticipantTypesText value={model.COMMON_OFFER_MAKER_TYPES} />,
} satisfies StepReviewField<LotCreateModel>;
