import { useFormContext } from 'react-hook-form';

import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReview } from '../../../../_atoms';
import { PricingModelFieldDictionary, PricingModelUnitDictionary } from '../../../../const';
import { CreateStepDictionary } from '../../const';

import { LotInfoFieldsDictionary } from './const';
import { LotInfoModel } from './types';

export const LotInfoReview: React.FC = () => {
  const { getValues } = useFormContext<LotInfoModel>();

  return (
    <StepReview<LotInfoModel>
      stepTitle={CreateStepDictionary.get('LOT_INFO').title}
      stepIndexTitle="4 Step"
      model={getValues()}
      fields={[
        {
          renderTitle: (model) => PricingModelFieldDictionary.get(model.pricingModel).QUANTITY.title,
          renderValue: (model) => (
            <UIKit.MoneyText
              color="white"
              value={model.quantity}
              addon={
                <Text color="orange.500" fontSize="sm">
                  {PricingModelUnitDictionary.get(model.pricingModel).QUANTITY}
                </Text>
              }
            />
          ),
        },
        {
          renderTitle: (model) => PricingModelFieldDictionary.get(model.pricingModel).MIN_SIZE.title,
          renderValue: (model) => (
            <UIKit.MoneyText
              color="white"
              value={model.minSize}
              addon={
                <Text color="orange.500" fontSize="sm">
                  {PricingModelUnitDictionary.get(model.pricingModel).MIN_SIZE}
                </Text>
              }
            />
          ),
        },
        {
          renderTitle: () => LotInfoFieldsDictionary.get('FDV').title,
          renderValue: (model) => (
            <UIKit.MoneyText
              color="white"
              value={model.targetFDV}
              addon={
                <Text color="orange.500" fontSize="sm">
                  $
                </Text>
              }
            />
          ),
        },
        {
          renderTitle: () => LotInfoFieldsDictionary.get('PRICE').title,
          renderValue: (model) => (
            <UIKit.MoneyText
              color="white"
              value={model.price}
              addon={
                <Text color="orange.500" fontSize="sm">
                  $
                </Text>
              }
            />
          ),
        },
      ]}
    />
  );
};
