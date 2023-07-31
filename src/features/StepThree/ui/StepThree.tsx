import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    VStack,
} from '@chakra-ui/react';
import {FC, useState} from 'react';
import {UseFormReturn} from 'react-hook-form';
import {
    STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE,
    STEP_THREE_FIELDS_BY_LOT_TYPE,
    STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE,
    StepThreeFields,
} from '../consts';
import {RawField} from '@shared/ui-kit/components/RawFIeld/RawField';
import {RawCheckbox} from '@shared/ui-kit/components/RawCheckbox/RawCheckbox';
import {FormBlockElement, FormField, RadioButtons} from "@shared/ui-kit";
import {ProjectInfoFields} from "@app/pages/offers/create/components/ProjectInfo/consts";
import {LotTypes} from "@app/pages/offers/create/components/ProjectInfo/types";
import {observer} from "mobx-react-lite";
import {useStore} from "@app/store";

interface IHandlRecount {
    currentID: string,
    bindedID: string,
    value: string,
    pricingModel: string
}

export const StepThree: FC<{
    form: UseFormReturn,
    lotType: any,
    handleRecountValues: ({}: IHandlRecount) => void,
    label: string,
    typeOfDeal: string
}> = observer((props) => {
        const {form, lotType, handleRecountValues, typeOfDeal} = props;
        const {getValues, formState, register, setValue} = form;
        const {errors} = formState;
        const {SellOfferStore} = useStore();
        const {
            typeOfPricingModel
        } = SellOfferStore;

        function switchPricingModel(btnId) {
            SellOfferStore.setTypeOfPricingModel(btnId)
        }

        const leftBtnLabel = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].leftBtnLabel;
        const rightBtnLabel = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].rightBtnLabel


        const bottomFieldID = STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id;


        return (
            <FormBlockElement
                label="Pricing model"
                // isRequired={isRequired('projectName') || isRequired('projectWebsite')}
                // grid={{cols: 2}}
            >
                <VStack>

                    <HStack w={'100%'}>
                        <Button
                            onClick={() => switchPricingModel(leftBtnLabel)}
                            w={'100%'}
                        >
                            {leftBtnLabel}
                        </Button>
                        <Button
                            onClick={() => switchPricingModel(rightBtnLabel)}
                            w={'100%'}
                        >
                            {rightBtnLabel}
                        </Button>
                    </HStack>

                    {typeOfPricingModel === 'In Stablecoin'
                        ?
                        <HStack w={'100%'} padding={'24px'}>
                            <FormField
                                register={{...register('contractSizeToOffer'), type: 'number'}}
                                errors={errors}
                                id={'contractSizeToOffer'}
                                value={getValues('contractSizeToOffer')}
                                w="100%"
                                placeholder={'Amount'}
                                label={StepThreeFields.CONTRACT_SIZE_TO_OFFER}
                            />
                            <FormField
                                register={{...register('minDealSize'), type: 'number'}}
                                errors={errors}
                                id={'minDealSize'}
                                value={getValues('minDealSize')}
                                w="100%"
                                placeholder={'Amount'}
                                label={StepThreeFields.MIN_DEAL_SIZE}
                            />
                        </HStack>

                        :
                        <HStack w={'100%'} padding={'24px'}>

                            {STEP_THREE_FIELDS_BY_LOT_TYPE[lotType].map(item => {
                                return <FormField
                                    register={{...register(item.id), type: 'number'}}
                                    errors={errors}
                                    id={item.id}
                                    value={getValues(item.id)}
                                    w="100%"
                                    placeholder={'Amount'}
                                    label={item.fieldLabel}
                                />
                            })
                            }

                        </HStack>

                    }

                    <HStack w={'100%'}
                            layerStyle="orangeGradient"
                    >
                        <FormControl
                            w={'100%'}
                        >
                            <FormLabel>{StepThreeFields.TARGET_FDV}</FormLabel>
                            <Input placeholder={'Amount'}
                                   value={getValues('targetFDV')}
                                   type={'number'}
                                   id={'targetFDV'}
                                   onChange={(e) => handleRecountValues({
                                       currentID: 'targetFDV',
                                       bindedID: bottomFieldID,
                                       value: e.currentTarget.value,
                                       pricingModel: typeOfPricingModel
                                   })}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>{STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].fieldLabel}</FormLabel>
                            <Input placeholder={'Amount'}
                                   value={getValues(STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id)}
                                   type={'number'}
                                   id={STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id}
                                   onChange={(e) => handleRecountValues({
                                       currentID: e.currentTarget.id,
                                       bindedID: 'targetFDV',
                                       value: e.currentTarget.value,
                                       pricingModel: typeOfPricingModel
                                   })}
                            />
                        </FormControl>
                    </HStack>
                    {typeOfDeal === 'Sell'
                        ?
                        <FormControl alignSelf={'flexStart'} paddingTop={'20px'}>
                            <RawCheckbox
                                handleChange={(id, value) => setValue(id, value)}
                                id={'offerTheBestBid'}
                                value={getValues('offerTheBestBid')}
                                label={StepThreeFields.OFFER_THE_BEST_BID}
                            />
                        </FormControl>
                        :
                        null
                    }

                </VStack>
            </FormBlockElement>
        );
    }
)
