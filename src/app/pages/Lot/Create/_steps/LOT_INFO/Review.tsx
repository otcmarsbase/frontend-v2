import { MutableRefObject } from 'react';

import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReview, StepReviewProps } from '../../_atoms';

import { LotInfoFieldsDictionary, PricingModelFieldTypeDictionary } from './const';
import { LotInfoModel, LotInfoStepRef } from './View';

export interface LotStepReviewProps extends Omit<StepReviewProps<LotInfoModel>, 'fields' | 'model'> {
  stepRef: MutableRefObject<LotInfoStepRef>;
}

export const LotStepReview: React.FC<LotStepReviewProps> = ({ stepRef, ...reviewProps }) => {
  return (
    <StepReview<LotInfoModel>
      {...reviewProps}
      model={stepRef.current.getValues()}
      fields={[
        {
          renderTitle: (model) => PricingModelFieldTypeDictionary.get(model.pricingModel).QUANTITY.title,
          isRequired: stepRef.current.isRequired('quantity'),
          renderValue: (model) => (
            <UIKit.MoneyText color="white" value={model.quantity} addon={<Text color="orange.500">%</Text>} />
          ),
        },
        {
          renderTitle: (model) => PricingModelFieldTypeDictionary.get(model.pricingModel).MIN_SIZE.title,
          isRequired: stepRef.current.isRequired('minSize'),
          renderValue: (model) => (
            <UIKit.MoneyText color="white" value={model.minSize} addon={<Text color="orange.500">%</Text>} />
          ),
        },
        {
          renderTitle: (model) => LotInfoFieldsDictionary.get('FDV').title,
          isRequired: stepRef.current.isRequired('targetFDV'),
          renderValue: (model) => (
            <UIKit.MoneyText color="white" value={model.targetFDV} addon={<Text color="orange.500">$</Text>} />
          ),
        },
        {
          renderTitle: (model) => LotInfoFieldsDictionary.get('PRICE').title,
          isRequired: stepRef.current.isRequired('price'),
          renderValue: (model) => (
            <UIKit.MoneyText color="white" value={model.price} addon={<Text color="orange.500">$</Text>} />
          ),
        },
        {
          renderTitle: () => LotInfoFieldsDictionary.get('IS_BEST_BID').title,
          isRequired: stepRef.current.isRequired('isBestBid'),
          renderValue: (model) => <Text color="white">{model.isBestBid ? 'Yes' : 'No'}</Text>,
        },
      ]}
    />
  );
};
