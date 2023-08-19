import { FC } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from '@app/store';
import { Checkbox, HStack, Input, VStack } from '@chakra-ui/react';
import { Common, LotFlow } from '@shared/types';
import {
  FormBlockElement,
  FormField,
  RadioButtons,
  UseFormReturn,
} from '@shared/ui-kit';

import { TCreateOfferFieldTypes } from '../../types';

import {
  STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE,
  STEP_THREE_FIELDS_BY_LOT_TYPE,
  STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE,
  StepThreeFields,
} from './consts';

interface HandleRecountParams {
  currentID: TCreateOfferFieldTypes;
  bindedID: TCreateOfferFieldTypes;
  value: string;
  pricingModel: LotFlow.PricingModel;
}

export interface ProjectDetailsProps {
  form: UseFormReturn;
  lotType: LotFlow.LotType;
  handleRecountValues: (params: HandleRecountParams) => void;
  direction: Common.Direction;
}

export const ProjectDetails: FC<ProjectDetailsProps> = observer((props) => {
  const { form, lotType, handleRecountValues, direction } = props;
  const { getValues, formState, register } = form;
  const { errors } = formState;
  const { sellOfferStore } = useStore();
  const { typeOfPricingModel } = sellOfferStore;

  function switchPricingModel(btnId: LotFlow.PricingModel) {
    sellOfferStore.setTypeOfPricingModel(btnId);
  }

  const leftButton = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].leftButton;
  const rightButton = STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE[lotType].rightButton;

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
              { value: leftButton.value, label: leftButton.value },
              { value: rightButton.value, label: rightButton.label },
            ]}
            onChange={switchPricingModel}
          />
        </HStack>

        {typeOfPricingModel === 'IN_STABLECOIN' ? (
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
        {direction === 'SELL' ? (
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
