import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import {
  EPricingModel,
  ETypeOfDeal,
  TCreateOfferFieldTypes,
} from '@app/pages/offers/create/types';
import { useStore } from '@app/store';
import { Checkbox, HStack, Input, VStack } from '@chakra-ui/react';
import { FormBlockElement, FormField, RadioButtons } from '@shared/ui-kit';
import {
  STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE,
  STEP_THREE_FIELDS_BY_LOT_TYPE,
  STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE,
  StepThreeFields,
} from './consts';
import { IProjectDetailsProps } from './types';

export const ProjectDetails: FC<IProjectDetailsProps> = observer((props) => {
  const { form, lotType, handleRecountValues, typeOfDeal } = props;
  const { getValues, formState, register } = form;
  const { errors } = formState;
  const { sellOfferStore } = useStore();
  const { typeOfPricingModel } = sellOfferStore;

  function switchPricingModel(btnId: EPricingModel) {
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
            w={'100%'}
            value={sellOfferStore.typeOfPricingModel}
            items={[
              { value: leftBtnLabel, label: leftBtnLabel },
              { value: rightBtnLabel, label: rightBtnLabel },
            ]}
            onChange={switchPricingModel}
          />
        </HStack>

        {typeOfPricingModel === EPricingModel.IN_STABLECOIN ? (
          <HStack w={'100%'} padding={'24px'}>
            <FormField
              register={register}
              errors={errors}
              name={'contractSizeToOffer'}
              value={getValues('contractSizeToOffer')}
              w="100%"
              component={<Input type="number" placeholder="Amount" />}
              label={StepThreeFields.CONTRACT_SIZE_TO_OFFER}
            />
            <FormField
              register={register}
              errors={errors}
              name={'minDealSize'}
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
                    bindedID: bottomFieldID as TCreateOfferFieldTypes,
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
                    currentID: e.currentTarget.id as TCreateOfferFieldTypes,
                    bindedID: 'targetFDV',
                    value: e.currentTarget.value,
                    pricingModel: typeOfPricingModel,
                  })
                }
              />
            }
          />
        </HStack>
        {typeOfDeal === ETypeOfDeal.SELL ? (
          <FormField
            register={register}
            name={'offerTheBestBid'}
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
