import { useCallback, useMemo } from 'react';

import { UILogic } from '@app/components';
import { Text, VStack } from '@chakra-ui/react';
import { UIKit, useIsRequired } from '@shared/ui-kit';

import { StepReview, StepReviewField } from './_atoms';
import { StepDescriptorKey, StepDescriptorsDictionary } from './const';
import { LotCreateModel, LotCreateSchema } from './schema';

export interface StepsReviewDescriptorProps {
  isRequired: (key: keyof LotCreateModel) => boolean;
}

export const getStepsReviewDescriptor = ({
  isRequired,
}: StepsReviewDescriptorProps): Record<
  Exclude<StepDescriptorKey, 'INVEST_DOC_REVIEW'>,
  StepReviewField<LotCreateModel>[]
> => {
  return {
    INVEST_DOC_START: [
      {
        renderTitle: () => <Text>Trade direction</Text>,
        renderValue: (model) => <UILogic.TradeDirectionText variant="ghost" value={model.COMMON_DIRECTION} />,
        isRequired: isRequired('COMMON_DIRECTION'),
      },
      {
        renderTitle: () => <Text>Type of lot</Text>,
        renderValue: (model) => (
          <UILogic.LotTypeChip value={model.type} withTokenWarrant={model.SAFE_WITH_TOKEN_WARRANT} />
        ),
        isRequired: isRequired('type'),
      },
      {
        renderTitle: () => <Text>With reassign</Text>,
        renderValue: (model) => <Text color="white">{model.INVEST_DOC_WITH_REASSIGN ? 'Yes' : 'No'}</Text>,
        isRequired: isRequired('INVEST_DOC_WITH_REASSIGN'),
      },
    ],
    COMMON_PROJECT: [
      {
        renderTitle: () => <Text>Type of buyer</Text>,
        renderValue: (model) => <UILogic.ParticipantTypesText value={model.COMMON_BID_MAKER_TYPES} />,
        isRequired: isRequired('COMMON_BID_MAKER_TYPES'),
      },
      {
        renderTitle: () => <Text>Is direct buyer</Text>,
        renderValue: (model) => <Text color="white">{model.COMMON_IS_DIRECT ? 'Yes' : 'No'}</Text>,
        isRequired: isRequired('COMMON_TELEGRAM'),
      },
      {
        renderTitle: () => <Text>Telegram</Text>,
        renderValue: (model) => <Text color="white">{model.COMMON_TELEGRAM}</Text>,
        isRequired: isRequired('COMMON_TELEGRAM'),
      },
      {
        renderTitle: () => <Text>Type of seller</Text>,
        renderValue: (model) => {
          if (model.COMMON_IS_NO_LIMIT) return <Text>No limitations</Text>;
          return <UILogic.ParticipantTypesText value={model.COMMON_OFFER_MAKER_TYPES} />;
        },
        isRequired: isRequired('COMMON_OFFER_MAKER_TYPES'),
      },
      {
        renderTitle: () => <Text>Deadline</Text>,
        renderValue: (model) =>
          !model.COMMON_DEADLINE ? <Text>No</Text> : <UIKit.DateText value={model.COMMON_DEADLINE} />,
        isRequired: isRequired('COMMON_DEADLINE'),
      },
    ],
    INVEST_DOC_ROUND: [
      {
        renderTitle: () => <Text>Investment round</Text>,
        renderValue: (model) => {
          return <UILogic.InvestmentRoundBadge value={model.INVEST_DOC_ROUND_TYPE} />;
        },
        isRequired: isRequired('INVEST_DOC_ROUND_TYPE'),
      },
      {
        renderTitle: () => <Text>Round FDV</Text>,
        renderValue: (model) => {
          return <UIKit.MoneyText value={model.INVEST_DOC_ROUND_FDV} addon="$" />;
        },
        isRequired: isRequired('INVEST_DOC_ROUND_FDV'),
      },
      {
        renderTitle: () => <Text>Contract value</Text>,
        renderValue: (model) => {
          return <UIKit.MoneyText value={model.INVEST_DOC_ROUND_SUMMARY} addon="$" />;
        },
        isRequired: isRequired('INVEST_DOC_ROUND_SUMMARY'),
      },
      {
        renderTitle: () => <Text>Estimated TGE Date</Text>,
        renderValue: (model) => {
          return model.TOKEN_TGE_IS_TBD ? (
            <Text>TBD</Text>
          ) : typeof model.TOKEN_TGE === 'number' ? (
            <UIKit.DateText value={model.TOKEN_TGE} />
          ) : (
            <Text>No</Text>
          );
        },
        isRequired: isRequired('TOKEN_TGE'),
      },
      {
        renderTitle: () => <Text>Lockup period</Text>,
        renderValue: (model) => {
          return <Text>{model.TOKEN_LOCKUP_PERIOD ? `${model.TOKEN_LOCKUP_PERIOD} months` : '-'}</Text>;
        },
        isRequired: isRequired('TOKEN_LOCKUP_PERIOD'),
      },
      {
        renderTitle: () => <Text>Vesting period</Text>,
        renderValue: (model) => {
          return <Text>{model.TOKEN_VESTING_PERIOD ? `${model.TOKEN_VESTING_PERIOD} months` : '-'}</Text>;
        },
        isRequired: isRequired('TOKEN_VESTING_PERIOD'),
      },
      {
        renderTitle: () => <Text>Tokens bought</Text>,
        renderValue: (model) => {
          return <UIKit.MoneyText value={model.INVEST_DOC_ROUND_UNITS} />;
        },
        isRequired: isRequired('INVEST_DOC_ROUND_UNITS'),
      },
      {
        renderTitle: () => <Text>Price per token</Text>,
        renderValue: (model) => {
          return <UIKit.MoneyText value={model.INVEST_DOC_ROUND_PRICE} addon="$" />;
        },
        isRequired: isRequired('INVEST_DOC_ROUND_PRICE'),
      },
    ],
    INVEST_DOC_PRICE: [
      {
        renderTitle: (model) => (
          <Text>{model.COMMON_PRICING_MODEL === 'SUMMARY' ? 'Contract size to offer' : 'Equity to offer'}</Text>
        ),
        renderValue: (model) => {
          if (model.COMMON_PRICING_MODEL === 'SUMMARY')
            return <UIKit.MoneyText value={model.COMMON_SUMMARY} addon="$" />;
          return <UIKit.MoneyText value={model.COMMON_UNITS} addon="%" />;
        },
        isRequired: isRequired('COMMON_SUMMARY') || isRequired('COMMON_UNITS'),
      },
      {
        renderTitle: (model) => (
          <Text>{model.COMMON_PRICING_MODEL === 'SUMMARY' ? 'Minimum deal size' : 'Minimum equity bid'}</Text>
        ),
        renderValue: (model) => {
          if (model.COMMON_PRICING_MODEL === 'SUMMARY')
            return <UIKit.MoneyText value={model.COMMON_MIN_FILTER_SUMMARY} addon="$" />;
          return <UIKit.MoneyText value={model.COMMON_MIN_FILTER_UNITS} addon="%" />;
        },
        isRequired: isRequired('COMMON_MIN_FILTER_SUMMARY') || isRequired('COMMON_MIN_FILTER_UNITS'),
      },
      {
        renderTitle: () => <Text>Target FDV</Text>,
        renderValue: (model) => {
          return <UIKit.MoneyText value={model.INVEST_DOC_FDV} addon="$" />;
        },
        isRequired: isRequired('INVEST_DOC_FDV'),
      },
    ],
  };
};

export interface LotReviewProps {
  values: LotCreateModel;
}

export const LotReview: React.FC<LotReviewProps> = ({ values }) => {
  const getValues = useCallback(() => values, [values]);
  const isRequired = useIsRequired(LotCreateSchema, getValues);

  const steps: StepDescriptorKey[] =
    values.COMMON_DIRECTION === 'BUY'
      ? ['INVEST_DOC_START', 'COMMON_PROJECT', 'INVEST_DOC_PRICE']
      : ['INVEST_DOC_START', 'COMMON_PROJECT', 'INVEST_DOC_ROUND', 'INVEST_DOC_PRICE'];

  const stepsDescriptors = useMemo(() => getStepsReviewDescriptor({ isRequired }), [isRequired]);

  return (
    <VStack w="full" alignItems="start" gap="1.5rem">
      {steps.map((key, index) => (
        <StepReview<LotCreateModel>
          key={key}
          stepTitle={StepDescriptorsDictionary.get(key).title}
          stepIndexTitle={`Step ${index + 1}`}
          model={values}
          fields={stepsDescriptors[key]}
        />
      ))}
    </VStack>
  );
};
