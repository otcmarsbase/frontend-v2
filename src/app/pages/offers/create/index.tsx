import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import { useStore } from '@app/store';
import { HStack, VStack, Text, Heading, Badge, Box } from '@chakra-ui/react';
import {
  FormSection,
  FormWrapper,
  RadioButtons,
  useForm,
} from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { ProjectInfo, Summary, TokenInfo } from './components';
import { ProjectDetails } from './components/ProjectDetails';
import { ELotType } from './components/ProjectInfo/types';
import { formDefaultValues } from './consts';
import { useFormStepsValidation } from './hooks/useFormStepsValidation';
import { useSummaryStepsValidation } from './hooks/useSummaryStepsValidation';
import { CreateOfferSchema } from './schemas';
import {
  EPricingModel,
  ETypeOfDeal,
  IHandleRecountProps,
  IHandleRecountValue,
  StepThreeRecountFieldByLotType,
} from './types';
import { getDefaultValues, getRecountedValue, reorderItems } from './utils';

export const CreateOffer: React.FC = observer(() => {
  const { sellOfferStore } = useStore();

  const { setTypeOfPricingModel, typeOfDeal, setTypeOfDeal } = sellOfferStore;

  const form = useForm({
    schema: CreateOfferSchema,
    defaultValues: formDefaultValues,
  });

  const data = form.watch();

  const { showStepTwo, showStepThree } = useFormStepsValidation({
    typeOfDeal,
    sellOfferStore,
  });

  useSummaryStepsValidation({ data, typeOfDeal, sellOfferStore });
  useEffect(() => {
    setTypeOfPricingModel(EPricingModel.IN_STABLECOIN);
  }, [data.lotType, setTypeOfPricingModel]);

  function handleRecountPriceInfoValues({
    curIds,
    id,
    value,
  }: IHandleRecountProps) {
    if (!value) {
      form.setValue(id, value.toString());
      return;
    }
    const orderedArr = reorderItems({ curIds, id });
    const fieldOneID = orderedArr[0];
    const fieldTwoID = orderedArr[1];

    const contractValue = form.getValues('contractValue');

    if (!contractValue) {
      form.setValue(fieldOneID, value.toString());
      return;
    }
    const _contractValue = new Decimal(contractValue);
    const _fieldOneStore = new Decimal(value);

    const recountedValue = _contractValue.div(_fieldOneStore).toString();
    // @ts-ignore
    form.setValue(fieldTwoID, recountedValue);
    // @ts-ignore
    form.setValue(fieldOneID, value.toString());
  }

  function handleRecountValues({
    currentID,
    bindedID,
    value,
    pricingModel,
  }: IHandleRecountValue) {
    const isCurtargetFDV = currentID === 'targetFDV';

    const contractValue_ = form.getValues('contractValue');
    const roundFDV_ = form.getValues('roundFDV');
    //@ts-ignore
    const denom_ = form.getValues(StepThreeRecountFieldByLotType[data.lotType]);

    if (!contractValue_ || !roundFDV_ || !denom_) {
      // @ts-ignore
      form.setValue(currentID, value);
      return;
    }

    const contractSizeToOffer = new Decimal(
      form.getValues('contractSizeToOffer'),
    );
    const contractValue = new Decimal(contractValue_);
    const targetFDV = new Decimal(
      isCurtargetFDV ? value : form.getValues('targetFDV'),
    );
    const roundFDV = new Decimal(roundFDV_);
    const equityToOffer = new Decimal(form.getValues('equityToOffer'));
    const _value = new Decimal(value);

    // @ts-ignore
    const denom = new Decimal(denom_);

    const { _bindedID, _result, _currentID } = getRecountedValue({
      contractSizeToOffer,
      contractValue,
      targetFDV,
      roundFDV,
      equityToOffer,
      _value,
      denom,
      pricingModel,
      currentID,
      // @ts-ignore
      bindedID,
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
      <FormWrapper width="full">
        <HStack justifyContent={'space-between'}>
          <VStack gap="0" alignItems="start" marginBottom="1.5rem">
            <Heading size="md" fontFamily="promo">
              Creating an offer
            </Heading>
            <Text color="dark.50" fontSize="sm">
              Set suitable conditions
            </Text>
          </VStack>
          <RadioButtons
            items={[
              { label: 'Buy', value: 'Buy' },
              // @ts-ignore
              { label: 'Sell', value: 'Sell' },
            ]}
            onChange={toggleTypeOfDeal}
            variant="solid"
            // @ts-ignore
            value={typeOfDeal}
            mapColorByValue={(value) => {
              // @ts-ignore
              if (value === ETypeOfDeal.SELL) return 'red.500';
              if (value === ETypeOfDeal.BUY) return 'green.500';
            }}
          />
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

          {showStepTwo ? (
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
          ) : null}
          {showStepThree ? (
            <FormSection>
              <HStack gap="0.5rem" marginBottom="2.5rem">
                <Badge>{typeOfDeal === ETypeOfDeal.SELL ? 3 : 2} step</Badge>
                <Text fontSize="sm" fontWeight="bold">
                  {typeOfDeal === ETypeOfDeal.SELL
                    ? 'Pricing details'
                    : 'Lot info'}
                </Text>
              </HStack>
              <ProjectDetails
                // @ts-ignore
                form={form}
                lotType={data.lotType as ELotType}
                // @ts-ignore
                handleRecountValues={handleRecountValues}
                typeOfDeal={typeOfDeal}
              />
            </FormSection>
          ) : null}
        </VStack>
      </FormWrapper>
      <Box position="sticky" top="0" right="0" alignSelf="start">
        <Summary
          onPublishLot={() => {}}
          typeOfDeal={typeOfDeal}
          lotType={data.lotType}
        />
      </Box>
    </HStack>
  );
});

CreateOffer.getLayout = ({ children }) => {
  return <Layouts.AppLayout>{children}</Layouts.AppLayout>;
};

export default CreateOffer;
