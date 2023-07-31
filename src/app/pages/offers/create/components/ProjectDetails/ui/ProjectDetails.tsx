import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE,
  STEP_THREE_FIELDS_BY_LOT_TYPE,
  STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE,
  StepThreeFields,
} from '../consts';
import { RawField } from '@shared/ui-kit/components/RawFIeld/RawField';
import { RawCheckbox } from '@shared/ui-kit/components/RawCheckbox/RawCheckbox';
import {FormBlockElement} from "@shared/ui-kit";

interface IHandlRecount {
  currentID: string,
  bindedID:string,
  value:string,
  pricingModel:string
}
export const ProjectDetails: FC<{
    form: UseFormReturn,
    lotType: any,
    handleRecountValues: ({}:IHandlRecount) => void,
    label:string
}> = (props) => {
    const {form, lotType, handleRecountValues, label} = props;
    const {getValues, formState, register, setValue} = form;
    const {errors} = formState;

    // const [pricingModel, setPricingModel] = useState(ButtonLabelsByLotType[lotType].leftBtnLabel);
    const [inStablecoins, setInStablecoins] = useState('In Stablecoin');

    function switchPricingModel(btnId) {
        setInStablecoins(prev=> btnId)
    }
    const leftBtnLabel = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].leftBtnLabel;
    const rightBtnLabel = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].rightBtnLabel


    const bottomFieldID = STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id;


    return (
        <FormBlockElement
            label="Pricing model"
            // isRequired={isRequired('projectName') || isRequired('projectWebsite')}
            grid={{cols: 2}}
        >

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

                {inStablecoins === 'In Stablecoin'
                    ?
                    <HStack>
                        <RawField
                            register={{...register('contractSizeToOffer'), type: 'number'}}
                            errors={errors}
                            id={'contractSizeToOffer'}
                            placeholder={'Amount'}
                            value={getValues('contractSizeToOffer')}
                            label={StepThreeFields.CONTRACT_SIZE_TO_OFFER}

                        />
                        <RawField
                            register={{...register('minDealSize'), type: 'number'}}
                            errors={errors}
                            id={'minDealSize'}
                            placeholder={'Amount'}
                            value={getValues('minDealSize')}
                            label={StepThreeFields.MIN_DEAL_SIZE}

                        />
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
                               onChange={(e) => handleRecountValues({currentID: 'targetFDV', bindedID: bottomFieldID, value: e.currentTarget.value, pricingModel: inStablecoins} )}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>{STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].fieldLabel}</FormLabel>
                        <Input placeholder={'Amount'}
                               value={getValues(STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id)}
                               type={'number'}
                               id={STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id}
                               onChange={(e) => handleRecountValues({currentID: e.currentTarget.id, bindedID: 'targetFDV',value: e.currentTarget.value, pricingModel: inStablecoins})}
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
</FormBlockElement>
  );
};
