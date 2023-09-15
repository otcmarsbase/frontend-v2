import { MutableRefObject } from 'react';

import { InvestmentRoundDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { MoneyText } from '@shared/ui-kit';

import { StepReview, StepReviewProps } from '../../_atoms';

import { RoundInfoFieldsDictionary } from './const';
import { RoundInfoModel, RoundInfoStepRef } from './View';

export interface RoundStepReviewProps extends Omit<StepReviewProps<RoundInfoModel>, 'fields' | 'model'> {
  stepRef: MutableRefObject<RoundInfoStepRef>;
}

export const RoundStepReview: React.FC<RoundStepReviewProps> = ({ stepRef, ...reviewProps }) => {
  return (
    <StepReview<RoundInfoModel>
      {...reviewProps}
      model={stepRef.current.getValues()}
      fields={[
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('ROUND').title,
          isRequired: stepRef.current.isRequired('round'),
          renderValue: (model) => <Text color="white">{InvestmentRoundDictionary.get(model.round).title}</Text>,
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('ROUND_FDV').title,
          isRequired: stepRef.current.isRequired('roundFDV'),
          renderValue: (model) => (
            <MoneyText color="white" value={model.roundFDV} addon={<Text color="orange.500">$</Text>} />
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('CONTRACT_VALUE').title,
          isRequired: stepRef.current.isRequired('contractValue'),
          renderValue: (model) => (
            <MoneyText color="white" value={model.contractValue} addon={<Text color="orange.500">$</Text>} />
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('TOTAL_EQUITY_BOUGHT').title,
          isRequired: stepRef.current.isRequired('totalEquityBought'),
          renderValue: (model) => (
            <MoneyText color="white" value={model.totalEquityBought} addon={<Text color="orange.500">$</Text>} />
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('PRICE_PER_EQUITY').title,
          isRequired: stepRef.current.isRequired('pricePerEquity'),
          renderValue: (model) => (
            <MoneyText color="white" value={model.pricePerEquity} addon={<Text color="orange.500">$</Text>} />
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('IS_BEST_BID').title,
          isRequired: stepRef.current.isRequired('isBestBid'),
          renderValue: (model) => <Text color="white">{model.isBestBid ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('DESCRIPTION').title,
          isRequired: stepRef.current.isRequired('description'),
          renderValue: (model) => (
            <Text maxW="20rem" color="white">
              {model.description}
            </Text>
          ),
        },
      ]}
    />
  );
};
