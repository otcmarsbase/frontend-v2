import { useCallback } from 'react';

import { VStack } from '@chakra-ui/react';
import { useIsRequired } from '@shared/ui-kit';

import { StepReview, StepReviewField } from './_atoms';
import { StepDescriptorKey, StepDescriptorsDictionary } from './const';
import * as Fields from './review';
import { LotCreateModel, LotCreateSchema } from './schema';

export interface StepsReviewDescriptorProps {
  values: LotCreateModel;
}

export const useStepsReviewDescriptor = ({
  values,
}: StepsReviewDescriptorProps): Record<
  Exclude<StepDescriptorKey, 'INVEST_DOC_REVIEW'>,
  StepReviewField<LotCreateModel>[]
> => {
  const getValues = useCallback(() => values, [values]);
  const isRequired = useIsRequired(LotCreateSchema, getValues);

  return {
    INVEST_DOC_START: [
      { ...Fields.CommonDirectionField, isRequired: isRequired('COMMON_DIRECTION') },
      { ...Fields.TypeField, isRequired: isRequired('type') },
      { ...Fields.InvestDocWithReassignField },
      { ...Fields.InvestDocAssetField, isRequired: isRequired('INVEST_DOC_ASSET') },
    ],
    COMMON_PROJECT: [
      { ...Fields.CommonOfferMakerTypesField, isRequired: isRequired('COMMON_OFFER_MAKER_TYPES') },
      { ...Fields.CommonTelegram, isRequired: isRequired('COMMON_TELEGRAM') },
      { ...Fields.CommonBidMakerTypesField, isRequired: isRequired('COMMON_BID_MAKER_TYPES') },
      { ...Fields.CommonDeadlineField, isRequired: isRequired('COMMON_DEADLINE') },
    ],
    INVEST_DOC_ROUND: [
      { ...Fields.InvestDocRoundTypeField, isRequired: isRequired('INVEST_DOC_ROUND_TYPE') },
      { ...Fields.InvestDocRoundFdvField, isRequired: isRequired('INVEST_DOC_ROUND_FDV') },
      { ...Fields.InvestDocRoundSummaryField, isRequired: isRequired('INVEST_DOC_ROUND_SUMMARY') },
      (values.type !== 'SAFE' || values.SAFE_WITH_TOKEN_WARRANT) && {
        ...Fields.TokenTgeField,
        isRequired: isRequired('TOKEN_TGE'),
      },
      (values.type !== 'SAFE' || values.SAFE_WITH_TOKEN_WARRANT) && {
        ...Fields.TokenLockupPeriodField,
        isRequired: isRequired('TOKEN_LOCKUP_PERIOD'),
      },
      (values.type !== 'SAFE' || values.SAFE_WITH_TOKEN_WARRANT) && {
        ...Fields.TokenVestingPeriodField,
        isRequired: isRequired('TOKEN_VESTING_PERIOD'),
      },
      { ...Fields.InvestDocRoundUnitsField, isRequired: isRequired('INVEST_DOC_ROUND_UNITS') },
      { ...Fields.InvestDocRoundPriceField, isRequired: isRequired('INVEST_DOC_ROUND_PRICE') },
    ].filter(Boolean),
    INVEST_DOC_PRICE: [
      { ...Fields.CommonSummaryField, isRequired: isRequired('COMMON_SUMMARY') },
      { ...Fields.CommonUnitsField, isRequired: isRequired('COMMON_UNITS') },
      { ...Fields.CommonMinFilterSummaryField, isRequired: isRequired('COMMON_MIN_FILTER_SUMMARY') },
      { ...Fields.CommonMinFilterUnitsField, isRequired: isRequired('COMMON_MIN_FILTER_UNITS') },
      { ...Fields.InvestDocFdvField, isRequired: isRequired('INVEST_DOC_FDV') },
      { ...Fields.CommonPriceField, isRequired: isRequired('COMMON_PRICE') },
    ],
  };
};

export interface LotReviewProps {
  values: LotCreateModel;
}

export const LotReview: React.FC<LotReviewProps> = ({ values }) => {
  const steps: StepDescriptorKey[] =
    values.COMMON_DIRECTION === 'BUY'
      ? ['INVEST_DOC_START', 'COMMON_PROJECT', 'INVEST_DOC_PRICE']
      : ['INVEST_DOC_START', 'COMMON_PROJECT', 'INVEST_DOC_ROUND', 'INVEST_DOC_PRICE'];

  const stepsDescriptors = useStepsReviewDescriptor({ values });

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
