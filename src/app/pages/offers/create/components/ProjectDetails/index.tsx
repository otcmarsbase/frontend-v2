import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { useStore } from '@app/store';
import { Checkbox, HStack, Input, VStack } from '@chakra-ui/react';
import { FormBlockElement, FormField, RadioButtons } from '@shared/ui-kit';
import {
  STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE,
  STEP_THREE_FIELDS_BY_LOT_TYPE,
  STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE,
  StepThreeFields,
} from './constants';

interface IHandleRecount {
  currentID: string;
  bindedID: string;
  value: string;
  pricingModel: string;
}

export const ProjectDetails: FC<{
  form: UseFormReturn;
  lotType: any;
  handleRecountValues: (values: IHandleRecount) => void;
  label: string;
  typeOfDeal: string;
}> = observer((props) => {
  const { form, lotType, handleRecountValues, typeOfDeal } = props;
  const { getValues, formState, register } = form;
  const { errors } = formState;
  const { sellOfferStore } = useStore();
  const { typeOfPricingModel } = sellOfferStore;

  function switchPricingModel(btnId) {
    sellOfferStore.setTypeOfPricingModel(btnId);
  }
  const leftBtnLabel =
    STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].leftBtnLabel;
  const rightBtnLabel =
    STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].rightBtnLabel;

  const bottomFieldID = STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id;

  return (
    <FormBlockElement
      label="Pricing model"
      // isRequired={isRequired('projectName') || isRequired('projectWebsite')}
      // grid={{cols: 2}}
    >
      <VStack>
        <HStack w={'100%'}>
          <RadioButtons
            w="100%"
            value={sellOfferStore.typeOfPricingModel}
            items={[
              { value: leftBtnLabel, label: leftBtnLabel },
              { value: rightBtnLabel, label: rightBtnLabel },
            ]}
            onChange={switchPricingModel}
          />
        </HStack>

        {typeOfPricingModel === 'In Stablecoin' ? (
          <HStack w={'100%'} padding={'24px'}>
            <FormField
              register={register}
              errors={errors}
              name="contractSizeToOffer"
              value={getValues('contractSizeToOffer')}
              w="100%"
              component={<Input type="number" placeholder="Amount" />}
              label={StepThreeFields.CONTRACT_SIZE_TO_OFFER}
            />
            <FormField
              register={register}
              errors={errors}
              name="minDealSize1"
              value={getValues('minDealSize')}
              w="100%"
              component={<Input type="number" placeholder="Amount" />}
              label={StepThreeFields.MIN_DEAL_SIZE}
            />
          </HStack>
        ) : (
          <HStack w={'100%'} padding={'24px'}>
            {STEP_THREE_FIELDS_BY_LOT_TYPE[lotType].map((item) => {
              return (
                <FormField
                  register={register}
                  errors={errors}
                  name={item.id}
                  value={getValues(item.id)}
                  w="100%"
                  component={<Input type="number" placeholder="Amount" />}
                  label={item.fieldLabel}
                />
              );
            })}
          </HStack>
        )}

        <HStack w={'100%'} layerStyle="orangeGradient">
          <FormField
            name="targetFDV"
            value={getValues('targetFDV')}
            label={StepThreeFields.TARGET_FDV}
            component={
              <Input
                placeholder="Amount"
                type="number"
                onChange={(e) =>
                  handleRecountValues({
                    currentID: 'targetFDV',
                    bindedID: bottomFieldID,
                    value: e.currentTarget.value,
                    pricingModel: typeOfPricingModel,
                  })
                }
              />
            }
          />

          <FormField
            label={STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].fieldLabel}
            value={getValues(STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id)}
            name={STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE[lotType].id}
            component={
              <Input
                placeholder="Amount"
                type="number"
                onChange={(e) =>
                  handleRecountValues({
                    currentID: e.currentTarget.id,
                    bindedID: 'targetFDV',
                    value: e.currentTarget.value,
                    pricingModel: typeOfPricingModel,
                  })
                }
              />
            }
          />
        </HStack>
        {typeOfDeal === 'Sell' ? (
          <FormField
            register={register}
            name="offerTheBestBid"
            value={getValues('offerTheBestBid')}
            component={
              <Checkbox>{StepThreeFields.OFFER_THE_BEST_BID}</Checkbox>
            }
          />
        ) : null}
      </VStack>
    </FormBlockElement>
  );
});