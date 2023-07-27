import {
    Box, Button, FormControl, FormLabel, HStack, Input,
    VStack,
} from "@chakra-ui/react";
import {FC, useState} from "react";
import {UseFormReturn} from "react-hook-form";
import {
    STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE,
    STEP_THREE_FIELDS_BY_LOT_TYPE,
    STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE,
    StepThreeFields
} from "../consts";
import {ILotType} from "../../StepOne/types";
import {RawField} from "@shared/ui-kit/components/RawFIeld/RawField";
import {RawCheckbox} from "@shared/ui-kit/components/RawCheckbox/RawCheckbox";

export const StepThree: FC<{
    form: UseFormReturn,
    lotType: ILotType,
    handleRecountValues: ({}, value: string) => void
}> = (props) => {
    const {form, lotType, handleRecountValues} = props;
    const {getValues, formState, register, setValue} = form;
    const {errors} = formState;

    // const [pricingModel, setPricingModel] = useState(ButtonLabelsByLotType[lotType].leftBtnLabel);
    const [inStablecoins, setInStablecoins] = useState('In Stablecoins');

    function switchPricingModel(btnId) {
        setInStablecoins(prev=> btnId)
    }
    const leftBtnLabel = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].leftBtnLabel;
    const rightBtnLabel = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].rightBtnLabel


    const bottomFieldID = STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id;


    return (
        <VStack
            bg={'orange'}
        >
            <Box>
                Pricing model
            </Box>
            <VStack>
                <HStack>
                    <Button
                        onClick={()=>switchPricingModel(leftBtnLabel)}
                    >
                        {leftBtnLabel}
                    </Button>
                    <Button
                        onClick={()=>switchPricingModel(rightBtnLabel)}
                    >
                        {rightBtnLabel}
                    </Button>
                </HStack>

                {inStablecoins === 'In Stablecoins'
                    ?
                    <HStack>
                        <FormControl>
                            <FormLabel>{StepThreeFields.CONTRACT_SIZE_TO_OFFER}</FormLabel>
                            <Input placeholder={'Amount'}
                                   value={getValues('contractSizeToOffer')}
                                   type={'number'}
                                   id={'contractSizeToOffer'}
                                   onChange={(e) => handleRecountValues(e.currentTarget.id, e.currentTarget.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>{StepThreeFields.MIN_DEAL_SIZE}</FormLabel>
                            <Input placeholder={'Amount'}
                                   value={getValues('minDealSize')}
                                   type={'number'}
                                   id={'minDealSize'}
                                   onChange={(e) => handleRecountValues(e.currentTarget.id, e.currentTarget.value)}
                            />
                        </FormControl>
                    </HStack>
                    :
                    <HStack>
                        {STEP_THREE_FIELDS_BY_LOT_TYPE[lotType].map(item => {
                            let fieldRules = {...register(item.id), type: 'number'};
                            return <RawField
                                register={fieldRules}
                                errors={errors}
                                id={item.id}
                                placeholder={'Amount'}
                                value={getValues(item.id)}
                                label={item.fieldLabel}

                            />

                            // <FormControl>
                            //     <FormLabel>{item.fieldLabel}</FormLabel>
                            //     <Input placeholder={'Amount'}
                            //            value={getValues(item.id)}
                            //            type={'number'}
                            //            id={item.id}
                            //            onChange={(e) => handleRecountValues(e.currentTarget.id, e.currentTarget.value)}
                            //     />
                            // </FormControl>
                        })
                        }
                    </HStack>
                }

                <HStack>
                    <FormControl>
                        <FormLabel>{StepThreeFields.TARGET_FDV}</FormLabel>
                        <Input placeholder={'Amount'}
                               value={getValues('targetFDV')}
                               type={'number'}
                               id={'targetFDV'}
                               onChange={(e) => handleRecountValues({currentID: 'targetFDV', bindedID: bottomFieldID}, e.currentTarget.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>{STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].fieldLabel}</FormLabel>
                        <Input placeholder={'Amount'}
                               value={getValues(STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id)}
                               type={'number'}
                               id={STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id}
                               onChange={(e) => handleRecountValues({currentID: e.currentTarget.id, bindedID: 'targetFDV'}, e.currentTarget.value)}
                        />
                    </FormControl>
                </HStack>

                <RawCheckbox
                    handleChange={(id,value)=>setValue(id,value)}
                    id={'offerTheBestBid'}
                    value={getValues('offerTheBestBid')}
                    label={StepThreeFields.OFFER_THE_BEST_BID}
                />
            </VStack>

        </VStack>
    )
}

