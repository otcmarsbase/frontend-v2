import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { PublishLot } from '@app/pages/offers/create/components/PublishLot';
import {
  IStepWrapperProps,
  ISummaryProps,
} from '@app/pages/offers/create/components/Summary/types';
import {
  getTargetFields,
  normalizeFields,
} from '@app/pages/offers/create/components/Summary/utils';
import { ETypeOfDeal } from '@app/pages/offers/create/types';
import { useStore } from '@app/store';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { SummaryStep } from '@shared/ui-kit';
import { EStepTypes, StepLabels } from './constants';

const StepWrapper: FC<IStepWrapperProps> = ({
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

export const Summary: FC<ISummaryProps> = observer(
  ({ onPublishLot, lotType, typeOfDeal }) => {
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
          {typeOfDeal === ETypeOfDeal.SELL && typeOfPricingModel ? (
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
            typeOfDeal === ETypeOfDeal.SELL
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
