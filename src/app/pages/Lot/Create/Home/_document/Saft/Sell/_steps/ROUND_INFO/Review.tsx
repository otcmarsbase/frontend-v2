import { useFormContext } from 'react-hook-form';

import { InvestmentRoundDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { MoneyText } from '@shared/ui-kit';

import { StepReview } from '../../../../../_atoms';
import { CreateStepDictionary } from '../../const';

import { RoundInfoFieldsDictionary } from './const';
import { RoundInfoModel } from './types';

export const RoundInfoReview: React.FC = () => {
  const { getValues } = useFormContext<RoundInfoModel>();

  return (
    <StepReview<RoundInfoModel>
      stepTitle={CreateStepDictionary.get('ROUND_INFO').title}
      stepIndexTitle="3 Step"
      model={getValues()}
      fields={[
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('ROUND').title,
          renderValue: (model) => <Text color="white">{InvestmentRoundDictionary.get(model.round).title}</Text>,
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('ROUND_FDV').title,
          renderValue: (model) => (
            <MoneyText
              color="white"
              value={model.roundFDV}
              addon={
                <Text color="orange.500" fontSize="sm">
                  $
                </Text>
              }
            />
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('CONTRACT_VALUE').title,
          renderValue: (model) => (
            <MoneyText
              color="white"
              value={model.contractValue}
              addon={
                <Text color="orange.500" fontSize="sm">
                  $
                </Text>
              }
            />
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('TOTAL_EQUITY_BOUGHT').title,
          renderValue: (model) => (
            <MoneyText
              color="white"
              value={model.totalEquityBought}
              addon={
                <Text color="orange.500" fontSize="sm">
                  $
                </Text>
              }
            />
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('PRICE_PER_EQUITY').title,
          renderValue: (model) => (
            <MoneyText
              color="white"
              value={model.pricePerEquity}
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
