import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import Layouts from '@app/layouts';
import {useStore} from '@app/store';
import {HStack, VStack, Text, Heading, Badge, Box, Button} from '@chakra-ui/react';
import {FormSection, FormWrapper, useForm} from '@shared/ui-kit';
import Decimal from "decimal.js";
import {ProjectInfo, Summary, TokenInfo} from './components';
import {CreateOfferSchema} from './schemas';
import {getDefaultValues, getRecountedValue, reorderItems} from './utils';
import {formDefaultValues} from "@app/pages/offers/create/consts";
import {useSummaryStepsValidation} from "@app/pages/offers/create/hooks/useSummaryStepsValidation";
import {useFormStepsValidation} from "@app/pages/offers/create/hooks/useFormStepsValdiation";
import {ProjectDetails} from "@app/pages/offers/create/components/ProjectDetails";
import {
    EPricingModel,
    ETypeOfDeal, IHandleRecountProps,
    IHandleRecountValue,
    StepThreeRecountFieldByLotType
} from "@app/pages/offers/create/types";

export const CreateOffer: React.FC = observer(() => {
    const {SellOfferStore} = useStore();

    const {
        setTypeOfPricingModel,
        typeOfDeal,
        setTypeOfDeal
    } = SellOfferStore;

    const form = useForm({
        schema: CreateOfferSchema,
        defaultValues: formDefaultValues,
    });

    const data = form.watch();

    const {showStepTwo, showStepThree} = useFormStepsValidation({typeOfDeal, SellOfferStore});

    useSummaryStepsValidation({data, typeOfDeal, SellOfferStore});
    useEffect(() => {
        setTypeOfPricingModel(EPricingModel.IN_STABLECOIN)
    }, [data.lotType])


    function handleRecountPriceInfoValues({curIds, id, value}:IHandleRecountProps) {
        if (!value) {
            // @ts-ignore
            form.setValue(id, value.toString())
            return
        }
        const orderedArr = reorderItems({curIds, id});

        const fieldOneID = orderedArr[0];
        const fieldTwoID = orderedArr[1];

        const contractValue = form.getValues('contractValue');

        if (!contractValue) {
            // @ts-ignore
            form.setValue(fieldOneID, value.toString())
            return
        }

        const _contractValue = new Decimal(contractValue);
        const _fieldOneStore = new Decimal(value);

        const recountedValue = _contractValue.div(_fieldOneStore).toString();
        // @ts-ignore
        form.setValue(fieldTwoID, recountedValue);
        // @ts-ignore
        form.setValue(fieldOneID, value.toString());
    }
    function handleRecountValues({currentID, bindedID, value, pricingModel}: IHandleRecountValue) {
        const isCurtargetFDV = currentID === 'targetFDV';

        const contractSizeToOffer = new Decimal(form.getValues('contractSizeToOffer'))
        const contractValue = new Decimal(form.getValues('contractValue'));
        const targetFDV = new Decimal(isCurtargetFDV ? value : form.getValues('targetFDV'));
        const roundFDV = new Decimal(form.getValues('roundFDV'));
        const equityToOffer = new Decimal(form.getValues('equityToOffer'));
        const _value = new Decimal(value);

        // @ts-ignore
        const denom = new Decimal(form.getValues(StepThreeRecountFieldByLotType[data.lotType]));

        if (!contractValue || !roundFDV || !denom) {
            // @ts-ignore
            form.setValue(currentID, value);
            return
        }
        const {_bindedID, _result, _currentID} = getRecountedValue({
            contractSizeToOffer,
            contractValue,
            targetFDV,
            roundFDV,
            equityToOffer,
            _value,
            denom,
            pricingModel,
            currentID,
            bindedID
        });

        // @ts-ignore
        form.setValue(_bindedID, _result);
        // @ts-ignore
        form.setValue(_currentID, value);
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
                            isActive={typeOfDeal === ETypeOfDeal.BUY}
                            _active={{
                                bg: 'var(--ui-kit-green-500, #279783)'
                            }}
                            onClick={() => toggleTypeOfDeal(ETypeOfDeal.BUY)}
                        >
                            Buy
                        </Button>
                        <Button
                            w={'140px'}
                            h={'40px'}
                            id={'Sell'}
                            isActive={typeOfDeal === ETypeOfDeal.SELL}
                            _active={{
                                bg: 'var(--ui-kit-green-500, #279783)'
                            }}
                            onClick={() => toggleTypeOfDeal(ETypeOfDeal.SELL)}
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
                                <Badge>{typeOfDeal === ETypeOfDeal.SELL ? 3 : 2} step</Badge>
                                <Text fontSize="sm" fontWeight="bold">
                                    {typeOfDeal === ETypeOfDeal.SELL ? 'Pricing details' : 'Lot info'}
                                </Text>
                            </HStack>
                            <ProjectDetails
                                // @ts-ignore
                                form={form}
                                lotType={data.lotType}
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
