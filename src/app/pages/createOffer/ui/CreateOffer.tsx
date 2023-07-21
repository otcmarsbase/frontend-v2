import {HStack, VStack} from "@chakra-ui/react";
import {useForm, UseFormProps} from "@shared/ui-kit";
import {YupProjectInfoShema} from "../../../../features/StepOne/consts";
import {YupTokenInfoShema} from "../../../../features/StepTwo/consts";
import {StepOne} from "../../../../features/StepOne";
import {Summary} from "../../../../features/Summary";
import {StepTwo} from "../../../../features/StepTwo";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "@app/store";
import {hasAllProperties, hasNoProperties} from "@app/pages/createOffer/lib/utils";
import _ from "lodash";
import {TokenInfoSafe} from "../../../../features/TokenInfoSafe";
import {StepThreeFields, StepThreeShema} from "../../../../features/StepThree/consts";
import {StepThree} from "../../../../features/StepThree";
import {ILotType} from "../../../../features/StepOne/types";
import * as yup from "yup";

export const CreateOffer = observer(() => {
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
        setStepThreeSuccess
    } = SellOfferStore;
    const schema = YupProjectInfoShema.concat(YupTokenInfoShema).concat(StepThreeShema);

    const form = useForm({
        schema, defaultValues: {
            typesOfBuyer: [],
            typesOfSeller: [],
            projectName:'',
            projectWebsite:'',
            lotType:'',
            telegram:'',
            deadlineDate:'',
            investmentRound:''
        }
    });
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
console.log('state',data)
        setBasicInfo(data)
    }, [data])


    function handleRecountValues(id, value) {
        if (id === 'minDealSize') {
            // const valuePrev = form.getValues('contractSizeToOffer');
            form.setValue('contractSizeToOffer', (Number(value) + 3))
            form.setValue('minDealSize', Number(value))
        } else {
            // const valuePrev = form.getValues('minDealSize')
            form.setValue('minDealSize', (Number(value) + 3))
            form.setValue('contractSizeToOffer', Number(value))
        }
    }


    return (
        <HStack
            justifyContent={'center'}
            mt={'20px'}
            gap={'20px'}
        >
            <VStack>
                <StepOne
                    // @ts-ignore
                    form={form}
                />

                {stepOneWasOnSuccess || stepOneSuccess ?
                    <>{data.lotType === "SAFE" ?
                        <TokenInfoSafe
                            // @ts-ignore
                            form={form}
                        />
                        :
                        <StepTwo
                            // @ts-ignore
                            form={form}
                        />
                    }</>
                    :
                    null
                }
                {(stepOneWasOnSuccess || stepOneSuccess) && (stepTwoWasOnSuccess || stepTwoSuccess) ?
                    <StepThree
                        // @ts-ignore
                        form={form}
                        lotType={data.lotType as ILotType}
                        handleRecountValues={handleRecountValues}
                        label={'Pricing model'}
                    />
                    :
                    null
                }

            </VStack>
            <VStack
                h={'100%'}
                alignSelf={'flex-start'}
            >
                <Summary/>
            </VStack>

        </HStack>
    )
})
