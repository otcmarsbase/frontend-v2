import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import Layouts from '@app/layouts';
import {useStore} from '@app/store';
import {HStack, VStack, Text, Heading, Badge, Box, Button} from '@chakra-ui/react';
import {FormSection, FormWrapper, useForm} from '@shared/ui-kit';
import Decimal from "decimal.js";
import {ProjectInfo, Summary, TokenInfo} from './components';
import {SellOfferSchema} from './schemas';
import {getDefaultValues, reorderItems} from './utils';
import {StepThree} from "../../../../features/StepThree";
import {ILotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import {formDefaultValues} from "@app/pages/offers/create/consts";
import {useSummaryStepsValidation} from "@app/pages/offers/create/hooks/useSummaryStepsValidation";
import {useFormStepsValidation} from "@app/pages/offers/create/hooks/useFormStepsValdiation";

export const CreateOffer: React.FC = observer(() => {
    const {SellOfferStore} = useStore();

    const {
        setTypeOfPricingModel,
        typeOfDeal,
        setTypeOfDeal
    } = SellOfferStore;

    const form = useForm({
        schema: SellOfferSchema,
        defaultValues: formDefaultValues,
    });

    const data = form.watch();

    useSummaryStepsValidation({data, typeOfDeal, SellOfferStore});

    const {showStepTwo, showStepThree} = useFormStepsValidation({typeOfDeal, SellOfferStore});

    useEffect(() => {
        setTypeOfPricingModel('In Stablecoin')
    }, [data.lotType])

    function handleRecountPriceInfoValues(curIds, id, value) {
        if (!value) {
            form.setValue(id, value.toString())
            return
        }
        const orderedArr = reorderItems(curIds, id);

        const fieldOneID = orderedArr[0];
        const fieldTwoID = orderedArr[1];

        const contractValue = form.getValues('contractValue');

        if (!contractValue) {
            form.setValue(fieldOneID, value.toString())
            return
        }

        const _contractValue = new Decimal(contractValue);
        const _fieldOneStore = new Decimal(value);

        const recountedValue = _contractValue.div(_fieldOneStore).toString();

        form.setValue(fieldTwoID, recountedValue)
        form.setValue(fieldOneID, value.toString())
    }


    function handleRecountValues({currentID, bindedID, value, pricingModel}) {
        const isCurtargetFDV = currentID === 'targetFDV';
console.log('{currentID, bindedID, value, pricingModel}',{currentID, bindedID, value, pricingModel});
        // cv1 =  5,000,000 $
        // fdv1 = 1,000,000,000 $
        const cv1 = Number(form.getValues('contractSizeToOffer'));
        const cv0 = Number(form.getValues('contractValue'));
        const fdv1 = Number(isCurtargetFDV ? value : form.getValues('targetFDV'));
        const fdv0 = Number(form.getValues('roundFDV'));
        const uq0 = Number(form.getValues('tokensBought'));
        const equityToOffer = Number(form.getValues('equityToOffer'));
        const totalEquityBought = Number(form.getValues('totalEquityBought'));
        console.log('totalEquityBought',totalEquityBought);
        // console.log('cv1',cv1);
        // console.log('cv0',cv0);
        // console.log('fdv1',fdv1);
        // console.log('fdv0',fdv0);
        // console.log('uq0',uq0);
        if (pricingModel === 'In Stablecoin') {
            const share0 = (cv0 * 100) / fdv0;
            const share1 = (cv1 * 100) / fdv1;
            const ratio = share1 / share0;
            const uq1 = uq0 * ratio;
            if (currentID === 'targetFDV') {
                const result = cv1 / uq1;
                // console.log('result',result);
                form.setValue(bindedID, result);
                form.setValue('targetFDV', value);
            } else {
                const share0 = fdv0 / cv0;
                const totalTokensForSale = uq0 * share0;
                const result = totalTokensForSale * value;
                // console.log('share0',share0, 'totalTokensForSale', totalTokensForSale, 'result', result);
                form.setValue(bindedID, result);
                form.setValue(currentID, value);
            }
        }else{
            console.log('fdv1', fdv1)
            const share0 = (cv0 * 100) / fdv0;
            console.log('share0', share0)
            const ratio = equityToOffer/totalEquityBought;
            console.log('ratio', ratio)
            const share1 = (ratio * share0)/100;
            console.log('share1',share1)
            let cv1 = fdv1 * share1;
            console.log('cv1',cv1)
            let result = cv1 / equityToOffer;
            console.log('result',result)

            if (currentID === 'targetFDV') {
                form.setValue(bindedID, result);
                form.setValue('targetFDV', value);
            } else {
                form.setValue(bindedID, result);
                form.setValue(currentID, value);
            }
        }
    }

    function toggleTypeOfDeal(dealType) {
        form.reset(getDefaultValues(dealType));
        setTypeOfDeal(dealType);
    }

    return (
        <HStack justifyContent={'center'} mt={'20px'} gap="2rem">
            <FormWrapper width="100%">
                <HStack
                    justifyContent={'space-between'}
                >
                    <VStack gap="0" alignItems="start" marginBottom="1.5rem">
                        <Heading size="md" fontFamily="promo">
                            Creating an offer
                        </Heading>
                        <Text color="dark.50" fontSize="sm">
                            Set suitable conditions
                        </Text>
                    </VStack>
                    <HStack>
                        <Button
                            w={'140px'}
                            h={'40px'}
                            id={'Buy'}
                            isActive={typeOfDeal === 'Buy'}
                            _active={{
                                bg: 'var(--ui-kit-green-500, #279783)'
                            }}
                            onClick={() => toggleTypeOfDeal('Buy')}
                        >
                            Buy
                        </Button>
                        <Button
                            w={'140px'}
                            h={'40px'}
                            id={'Sell'}
                            isActive={typeOfDeal === 'Sell'}
                            _active={{
                                bg: 'var(--ui-kit-green-500, #279783)'
                            }}
                            onClick={() => toggleTypeOfDeal('Sell')}
                        >
                            Sell
                        </Button>
                    </HStack>
                </HStack>

                <VStack gap="1.5rem">
                    <FormSection>
                        <HStack gap="0.5rem" marginBottom="2.5rem">
                            <Badge>1 step</Badge>
                            <Text fontSize="sm" fontWeight="bold">
                                Project info
                            </Text>
                        </HStack>
                        <ProjectInfo
                            // @ts-ignore
                            form={form}
                            typeOfDeal={typeOfDeal}
                        />
                    </FormSection>

                    {showStepTwo ?
                        <FormSection>
                            <HStack gap="0.5rem" marginBottom="2.5rem">
                                <Badge>2 step</Badge>
                                <Text fontSize="sm" fontWeight="bold">
                                    Details about the token
                                </Text>
                            </HStack>
                            <TokenInfo
                                // @ts-ignore
                                form={form}
                                lotType={data.lotType}
                                handleRecountPriceInfoValues={handleRecountPriceInfoValues}
                            />
                        </FormSection>
                        :
                        null
                    }
                    {showStepThree ?
                        <FormSection>
                            <HStack gap="0.5rem" marginBottom="2.5rem">
                                <Badge>{typeOfDeal === 'Sell' ? 3 : 2} step</Badge>
                                <Text fontSize="sm" fontWeight="bold">
                                    {typeOfDeal === 'Sell' ? 'Pricing details' : 'Lot info'}
                                </Text>
                            </HStack>
                            <StepThree
                                // @ts-ignore
                                form={form}
                                lotType={data.lotType as ILotType}
                                handleRecountValues={handleRecountValues}
                                label={'Pricing model'}
                                typeOfDeal={typeOfDeal}
                            />
                        </FormSection>
                        :
                        null
                    }
                </VStack>
            </FormWrapper>
            <Box position="sticky" top="0" right="0" alignSelf="start">
                <Summary
                    onPublishLot={() => {
                    }}
                    typeOfDeal={typeOfDeal}
                    lotType={data.lotType}
                />
            </Box>
        </HStack>
    );
});

CreateOffer.getLayout = ({children}) => {
    return <Layouts.AppLayout>{children}</Layouts.AppLayout>;
};

export default CreateOffer;
