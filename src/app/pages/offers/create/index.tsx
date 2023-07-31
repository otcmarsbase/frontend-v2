import {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import Layouts from '@app/layouts';
import {useStore} from '@app/store';
import {HStack, VStack, Text, Heading, Badge, Box, ButtonGroup, Button} from '@chakra-ui/react';
import {FormBlockElement, FormSection, FormWrapper, RadioButtons, useForm} from '@shared/ui-kit';
import Decimal from "decimal.js";
import {ProjectInfo, Summary, TokenInfo, TokenInfoSafe} from './components';
import {SellOfferSchema} from './schemas';
import {hasAllProperties, reorderItems} from './utils';
import {StepThree} from "../../../../features/StepThree";
import {ILotType, LotTypes} from "@app/pages/offers/create/components/ProjectInfo/types";
import {hasNoProperties} from "@app/pages/offers/utils";
import {ProjectInfoFields} from "@app/pages/offers/create/components/ProjectInfo/consts";

const defaultValues = {
    typesOfBuyer: [],
    typesOfSeller: [],
    // projectName: '',
    // projectWebsite: '',
    lotType: 'SAFE',
    // telegram: '',
    // deadlineDate: '',
    // investmentRound: '',
    // targetFDV:0,
    // tokensBought:0,
    // roundFDV:0,
    // contractValue:0,
    // contractSizeToOffer:0,
    // minDealSize:0
}

function getDefaultValues(typeOfDeal) {
    const draftByTypeOfDeal = JSON.parse(localStorage.getItem(`${typeOfDeal}Draft`));

    if (!draftByTypeOfDeal) {
        return defaultValues
    } else {
        return draftByTypeOfDeal
    }
}

export const CreateOffer: React.FC = observer(() => {
    const {SellOfferStore} = useStore();

    const {
        setBasicInfo,
        setStepOneSuccess,
        setStepOneWasOnSuccess,
        stepOneWasOnSuccess,
        stepOneSuccess,
        stepTwoWasOnSuccess,
        stepTwoSuccess,
        setStepTwoSuccess,
        setStepTwoWasOnSuccess,
        setStepThreeWasOnSuccess,
        setStepThreeSuccess,
        setTypeOfPricingModel,
        typeOfDeal,
        setTypeOfDeal
    } = SellOfferStore;

    // const [defValues,setDefValues] = useState(defaultValues)
    // useEffect(()=>{
    //     setDefValues(getDefaultValues(typeOfDeal))
    // },[typeOfDeal])

    const form = useForm({
        schema: SellOfferSchema,
        defaultValues: {
            typesOfBuyer: [],
            typesOfSeller: [],
            projectName: '',
            projectWebsite: '',
            lotType: 'SAFE'
        },
    });

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

    const data = form.watch();

    useEffect(() => {
        //TODO add validations
        const hasStepOneFieldsDirty = hasAllProperties(form.formState.dirtyFields, ['projectName', 'projectWebsite', 'telegram'])
        const hasStepTwoFieldsDirty = hasAllProperties(form.formState.dirtyFields, ['investmentRound', 'roundFDV', 'contractValue'])
        const stepThreeFiledsValid = data.contractSizeToOffer > 0 && data.minDealSize > 0

        const stepOneOnError = hasNoProperties(form.formState.errors, ['projectName', 'projectWebsite', 'telegram'])
        const stepTwoOnError = hasNoProperties(form.formState.errors, ['investmentRound', 'roundFDV', 'contractValue'])
        const stepThreeOnError = hasNoProperties(form.formState.errors, ['contractSizeToOffer', 'minDealSize'])
//TODO костылька
        const stepOnePassed = !stepOneOnError && hasStepOneFieldsDirty && data.lotType && data.lotType.length > 0;
        setStepOneSuccess(stepOnePassed)
        if (stepOnePassed) {
            setStepOneWasOnSuccess(true)
        }

        const stepTwoPassed = !stepTwoOnError && hasStepTwoFieldsDirty;
        setStepTwoSuccess(stepTwoPassed)
        if (stepTwoPassed) {
            setStepTwoWasOnSuccess(true)
        }
        const stepThreePassed = !stepThreeOnError && stepThreeFiledsValid;
        setStepThreeSuccess(stepThreePassed)
        if (stepTwoPassed) {
            setStepThreeWasOnSuccess(true)
        }
        setBasicInfo(data)
        localStorage.setItem(`${typeOfDeal}Draft`, JSON.stringify(data));

        console.log('formrrrrr', form.getFieldState('projectName'))
    }, [data])

    const [showStepTwo, setShowStepTwo] = useState(false)

    useEffect(() => {
        let _showStepTwo = stepOneWasOnSuccess || stepOneSuccess;
        if (typeOfDeal === 'Sell') {
            setShowStepTwo(prev => _showStepTwo)
        } else {
            setShowStepThree(prev => _showStepTwo)
            setShowStepTwo(prev => false)
        }
    }, [stepOneWasOnSuccess, stepOneSuccess, typeOfDeal]);

    const [showStepThree, setShowStepThree] = useState(false);

    useEffect(() => {
        let _showStepThree = (stepOneWasOnSuccess || stepOneSuccess) && (stepTwoWasOnSuccess || stepTwoSuccess);
        if (typeOfDeal === 'Sell') {
            setShowStepThree(prev => _showStepThree)
        }
    }, [stepTwoWasOnSuccess, stepTwoSuccess, typeOfDeal]);

    useEffect(() => {
        setTypeOfPricingModel('In Stablecoin')
    }, [data.lotType])

    function handleRecountValues({currentID, bindedID, value, pricingModel}) {
        const isCurtargetFDV = currentID === 'targetFDV';

        // cv1 =  5,000,000 $
        // fdv1 = 1,000,000,000 $
        const cv1 = Number(form.getValues('contractSizeToOffer'));
        const cv0 = Number(form.getValues('contractValue'));
        const fdv1 = Number(isCurtargetFDV ? value : 'targetFDV');
        const fdv0 = Number(form.getValues('roundFDV'));
        const uq0 = Number(form.getValues('tokensBought'));

        if (pricingModel === 'In Stablecoin') {
            const share0 = (cv0 * 100) / fdv0;
            const share1 = (cv1 * 100) / fdv1;
            const ratio = share1 / share0;
            const uq1 = uq0 * ratio;
            if (currentID === 'targetFDV') {
                const result = cv1 / uq1;
                form.setValue(bindedID, result)
                form.setValue('targetFDV', value)
            } else {
                const result = cv1 / value;
                form.setValue('targetFDV', result)
                form.setValue(bindedID, value)
            }

        }
    }

    function toggleTypeOfDeal(dealType) {
        // console.log('form.formState',form.formState.dirtyFields);
        // localStorage.setItem('formState', JSON.stringify(form.formState.dirtyFields))
        form.reset(getDefaultValues(dealType));
        // const fieldStatesPrev = JSON.parse(localStorage.getItem('formState'))

        // form.formState =
        setTypeOfDeal(dealType)
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
