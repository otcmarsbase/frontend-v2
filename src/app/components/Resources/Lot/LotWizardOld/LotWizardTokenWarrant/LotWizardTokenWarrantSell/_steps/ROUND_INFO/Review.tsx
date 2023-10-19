import { useFormContext } from 'react-hook-form';

import { InvestmentRoundDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { MoneyText } from '@shared/ui-kit';
import { format } from 'date-fns';

import { StepReview } from '../../../../_atoms';
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
          renderValue: (model) => (
            <Text color="white">{model.round ? InvestmentRoundDictionary.get(model.round).title : '-'}</Text>
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('ROUND_FDV').title,
          renderValue: (model) =>
            model.roundFDV ? (
              <MoneyText
                color="white"
                value={model.roundFDV}
                addon={
                  <Text color="orange.500" fontSize="sm">
                    $
                  </Text>
                }
              />
            ) : (
              <Text color="white">-</Text>
            ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('CONTRACT_VALUE').title,
          renderValue: (model) =>
            model.contractValue ? (
              <MoneyText
                color="white"
                value={model.contractValue}
                addon={
                  <Text color="orange.500" fontSize="sm">
                    $
                  </Text>
                }
              />
            ) : (
              <Text color="white">-</Text>
            ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('ESTIMATE_TGE_DATE').title,
          renderValue: (model) => (
            <Text color="white">{model.estimateTGEDate ? format(model.estimateTGEDate, 'dd.MM.yyyy') : '-'}</Text>
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('LOCKUP_PERIOD').title,
          renderValue: (model) => (
            <Text color="white">{model.lockupPeriod ? `${model.lockupPeriod} months` : '-'}</Text>
          ),
        },
        {
          renderTitle: () => RoundInfoFieldsDictionary.get('VESTING_CALENDAR').title,
          renderValue: (model) => (
            <Text color="white">{model.vestingCalendar ? `${model.vestingCalendar} months` : '-'}</Text>
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
                  %
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
