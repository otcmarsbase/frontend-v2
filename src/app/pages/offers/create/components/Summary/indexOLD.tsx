import {observer} from 'mobx-react-lite';
import {useStore} from '@app/store';
import {Box, Button, VStack, Heading, Text} from '@chakra-ui/react';
import {SummaryStep} from '@shared/ui-kit';
import {StepLabels, StepTypes, StepsText} from './constants';
import {hasAllProperties} from "@app/pages/offers/utils";


interface IStepWrapperProps {
    isSuccessFilled: boolean;
    step: StepTypes;
    data: any;
    lotType: string;
    pricingModel: string
}

const StepWrapper = ({isSuccessFilled, step, data, lotType, pricingModel}: IStepWrapperProps) => {

    console.log('pricingModel',StepsText[step][lotType], pricingModel)
    if(!lotType || !step) return

    const objEntr = StepsText[step][lotType].hasOwnProperty(pricingModel) ? StepsText[step][lotType][pricingModel] : StepsText[step][lotType]['In Stablecoin']

    const targetFields = step === StepTypes.SECOND_STEP_BUY ? objEntr : Object.entries(StepsText[step]);

console.log('targetFields',targetFields)
    const fields = targetFields.reduce(
        (acc, curValue) => [
            // @ts-ignore
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
            stepData={{
                id: StepLabels[step].index,
                label: StepLabels[step].label,
            }}
            // @ts-ignore
            fields={fields}
        />
    );
    return(
        <Box>
            gf
        </Box>
    )
};

export interface SummaryProps {
    onPublishLot: () => void;
    lotType: string;
    typeOfDeal: string
}

export const Summary = observer(({onPublishLot, lotType, typeOfDeal}: SummaryProps) => {
    const {SellOfferStore} = useStore();
    const {typeOfPricingModel} = SellOfferStore;
    return (
        <VStack layerStyle="darkGradientBordered" alignSelf="start">
            <Box alignSelf="start" mb="1.5rem">
                <Heading size="md" fontFamily="promo">
                    Final selection
                </Heading>
                <Text fontSize="sm" color="dark.50">
                    Set suitable conditions
                </Text>
            </Box>
            <StepWrapper
                isSuccessFilled={SellOfferStore.stepOneSuccess}
                step={StepTypes.FIRST_STEP}
                lotType={lotType}
                pricingModel={typeOfPricingModel}
                data={SellOfferStore.basicInfo}
            />
            {typeOfDeal === 'Sell' && typeOfPricingModel ?
                <>
                    <StepWrapper
                        isSuccessFilled={SellOfferStore.stepOneSuccess && SellOfferStore.stepTwoSuccess}
                        step={StepTypes.SECOND_STEP}
                        lotType={lotType}
                        pricingModel={typeOfPricingModel}
                        data={SellOfferStore.basicInfo}
                    />
                    <StepWrapper
                        isSuccessFilled={SellOfferStore.stepOneSuccess && SellOfferStore.stepTwoSuccess && SellOfferStore.stepThreeSuccess}
                        step={StepTypes.THIRD_STEP}
                        lotType={lotType}
                        pricingModel={typeOfPricingModel}
                        data={SellOfferStore.basicInfo}
                    />
                </>
                :
                <StepWrapper
                    isSuccessFilled={SellOfferStore.stepOneSuccess && SellOfferStore.stepThreeSuccess}
                    step={StepTypes.SECOND_STEP_BUY}
                    lotType={lotType}
                    pricingModel={typeOfPricingModel}
                    data={SellOfferStore.basicInfo}
                />
            }
            <Button onClick={onPublishLot}>Publish Lot</Button>
        </VStack>
    )
        ;
});
