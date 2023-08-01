import {observer} from 'mobx-react-lite';
import {useStore} from '@app/store';
import {Box, Button, VStack, Heading, Text} from '@chakra-ui/react';
import {SummaryStep} from '@shared/ui-kit';
import {StepLabels, StepTypes, StepsText} from './constants';
import {PublishLot} from "@app/pages/offers/create/components/PublishLot";

interface IStepWrapperProps {
    isSuccessFilled: boolean;
    step: StepTypes;
    data: any;
    lotType: string;
    pricingModel: string;
    stepWasOpened: boolean
}

function getTargetFields({step, lotType, pricingModel}) {
    let targetFields = []
    if (StepTypes.FIRST_STEP === step) {
        targetFields = Object.entries(StepsText[step])
    } else if (StepTypes.SECOND_STEP === step) {
        targetFields = Object.entries(StepsText[step][lotType])
    } else {
        const isPricingModelExist = StepsText[step][lotType].hasOwnProperty(pricingModel);
        targetFields = Object.entries(StepsText[step][lotType][isPricingModelExist ? pricingModel : 'In Stablecoin'])
    }
    return targetFields
}

const StepWrapper = ({isSuccessFilled, step, data, lotType, pricingModel, stepWasOpened}: IStepWrapperProps) => {
    const targetFields = getTargetFields({step, lotType, pricingModel});
// console.log('StepWrapper',data)
    const fields = targetFields.reduce(
        (acc, curValue) => [

            ...acc,
            {
                name: curValue[1],
                value: data[curValue[0]],
            },
        ],
        [] as { name: string; value: any }[],
    );
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
    lotType: string;
    typeOfDeal: string
}

export const Summary = observer(({onPublishLot, lotType, typeOfDeal}: SummaryProps) => {
    const {SellOfferStore} = useStore();
    const {
        typeOfPricingModel,
        stepOneSuccess,
        stepThreeSuccess,
        stepTwoSuccess,
        basicInfo,
        stepOneWasOnSuccess,
        stepTwoWasOnSuccess,
        stepThreeWasOnSuccess
    } = SellOfferStore;

    const SellConditionsComplete = stepOneSuccess && stepTwoSuccess && stepThreeSuccess;
    const BuyConditionsComplete = stepOneSuccess && stepThreeSuccess;


    return (
        <VStack layerStyle="darkGradientBordered" alignSelf="start" gap={'1.5rem'}>
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
                step={StepTypes.FIRST_STEP}
                lotType={lotType}
                stepWasOpened={stepTwoWasOnSuccess}
                pricingModel={typeOfPricingModel}
                data={basicInfo}
            />
            {typeOfDeal === 'Sell' && typeOfPricingModel ?
                <>
                    <StepWrapper
                        isSuccessFilled={stepTwoSuccess}
                        step={StepTypes.SECOND_STEP}
                        lotType={lotType}
                        stepWasOpened={stepTwoWasOnSuccess}
                        pricingModel={typeOfPricingModel}
                        data={SellOfferStore.basicInfo}
                    />
                    <StepWrapper
                        isSuccessFilled={stepThreeSuccess}
                        step={StepTypes.THIRD_STEP}
                        lotType={lotType}
                        stepWasOpened={stepThreeWasOnSuccess}
                        pricingModel={typeOfPricingModel}
                        data={SellOfferStore.basicInfo}
                    />
                </>
                :
                <StepWrapper
                    isSuccessFilled={stepThreeSuccess}
                    step={StepTypes.SECOND_STEP_BUY}
                    lotType={lotType}
                    stepWasOpened={stepThreeWasOnSuccess}
                    pricingModel={typeOfPricingModel}
                    data={basicInfo}
                />
            }
            </VStack>
            <PublishLot
                onPublishLot={onPublishLot}
                isActive={typeOfDeal === 'Sell' ? SellConditionsComplete : BuyConditionsComplete}
            >
                Publish Lot
            </PublishLot>
        </VStack>
    )
        ;
});
