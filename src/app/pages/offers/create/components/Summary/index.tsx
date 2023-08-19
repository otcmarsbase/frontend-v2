import { FC } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from '@app/store';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { Common, LotFlow } from '@shared/types';
import { SummaryStep } from '@shared/ui-kit';

import { PublishLot } from '../PublishLot';

import { EStepTypes, StepLabels } from './constants';
import { getTargetFields, normalizeFields } from './utils';

export interface StepWrapperProps {
  isSuccessFilled: boolean;
  step: EStepTypes;
  data: any;
  lotType: LotFlow.LotType;
  pricingModel: LotFlow.PricingModel;
  stepWasOpened: boolean;
}

const StepWrapper: FC<StepWrapperProps> = ({
  isSuccessFilled,
  step,
  data,
  lotType,
  pricingModel,
  stepWasOpened,
}) => {
  const targetFields = getTargetFields({ step, lotType, pricingModel });

  const fields = normalizeFields({ targetFields, data });
  return (
    <SummaryStep
      isSuccessFilled={isSuccessFilled}
      stepWasOpened={stepWasOpened}
      stepData={{
        id: StepLabels[step].index,
        label: StepLabels[step].label,
      }}
      fields={fields}
    />
  );
};

export interface SummaryProps {
  onPublishLot: () => void;
  lotType: LotFlow.LotType;
  direction: Common.Direction;
}

export const Summary: FC<SummaryProps> = observer(
  ({ onPublishLot, lotType, direction }) => {
    const { sellOfferStore } = useStore();
    const {
      typeOfPricingModel,
      stepOneSuccess,
      stepThreeSuccess,
      stepTwoSuccess,
      basicInfo,
      stepTwoWasOnSuccess,
      stepThreeWasOnSuccess,
    } = sellOfferStore;

    const SellConditionsComplete =
      stepOneSuccess && stepTwoSuccess && stepThreeSuccess;
    const BuyConditionsComplete = stepOneSuccess && stepThreeSuccess;

    return (
      <VStack
        layerStyle="darkGradientBordered"
        alignSelf="start"
        gap={'1.5rem'}
      >
        <Box alignSelf="start" mb="1.5rem">
          <Heading size="md" fontFamily="promo">
            Final selection
          </Heading>
          <Text fontSize="sm" color="dark.50">
            Set suitable conditions
          </Text>
        </Box>
        <VStack gap={'0.5rem'}>
          <StepWrapper
            isSuccessFilled={stepOneSuccess}
            step={EStepTypes.FIRST_STEP}
            lotType={lotType}
            stepWasOpened={stepTwoWasOnSuccess}
            pricingModel={typeOfPricingModel}
            data={basicInfo}
          />
          {direction === 'SELL' && typeOfPricingModel ? (
            <>
              <StepWrapper
                isSuccessFilled={stepTwoSuccess}
                step={EStepTypes.SECOND_STEP}
                lotType={lotType}
                stepWasOpened={stepTwoWasOnSuccess}
                pricingModel={typeOfPricingModel}
                data={sellOfferStore.basicInfo}
              />
              <StepWrapper
                isSuccessFilled={stepThreeSuccess}
                step={EStepTypes.THIRD_STEP}
                lotType={lotType}
                stepWasOpened={stepThreeWasOnSuccess}
                pricingModel={typeOfPricingModel}
                data={sellOfferStore.basicInfo}
              />
            </>
          ) : (
            <StepWrapper
              isSuccessFilled={stepThreeSuccess}
              step={EStepTypes.SECOND_STEP_BUY}
              lotType={lotType}
              stepWasOpened={stepThreeWasOnSuccess}
              pricingModel={typeOfPricingModel}
              data={basicInfo}
            />
          )}
        </VStack>
        <PublishLot
          onPublishLot={onPublishLot}
          isActive={
            direction === 'SELL'
              ? SellConditionsComplete
              : BuyConditionsComplete
          }
        >
          Publish Lot
        </PublishLot>
      </VStack>
    );
  },
);
