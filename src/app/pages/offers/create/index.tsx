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
import { ILotType } from './components/ProjectInfo/types';
import { formDefaultValues } from './constants';
import { useFormStepsValidation } from './hooks/useFormStepsValdiation';
import { useSummaryStepsValidation } from './hooks/useSummaryStepsValidation';
import { SellOfferSchema } from './schemas';
import { getDefaultValues, getRecountedValue, reorderItems } from './utils';

const StepThreeRecountFieldByLotType = {
  SAFE: 'totalEquityBought',
  SAFT: 'tokensBought',
  'Token warrant': 'tokensShareBought',
};
export const CreateOffer: React.FC = observer(() => {
  const { sellOfferStore } = useStore();

  const { setTypeOfPricingModel, typeOfDeal, setTypeOfDeal } = sellOfferStore;

  const form = useForm({
    schema: SellOfferSchema,
    defaultValues: formDefaultValues,
  });

  const data = form.watch();

  const { showStepTwo, showStepThree } = useFormStepsValidation({
    typeOfDeal,
    sellOfferStore,
  });

  useSummaryStepsValidation({ data, typeOfDeal, sellOfferStore });
  useEffect(() => {
    setTypeOfPricingModel('In Stablecoin');
  }, [data.lotType, setTypeOfPricingModel]);

  function handleRecountPriceInfoValues(curIds, id, value) {
    if (!value) {
      form.setValue(id, value.toString());
      return;
    }
    const orderedArr = reorderItems(curIds, id);

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

    form.setValue(fieldTwoID, recountedValue);
    form.setValue(fieldOneID, value.toString());
  }

  // TODO:
  function handleRecountValues({ currentID, bindedID, value, pricingModel }) {
    const isCurtargetFDV = currentID === 'targetFDV';

    const cv1 = Number(form.getValues('contractSizeToOffer'));
    const cv0 = Number(form.getValues('contractValue'));
    const fdv1 = Number(isCurtargetFDV ? value : form.getValues('targetFDV'));
    const fdv0 = Number(form.getValues('roundFDV'));
    const equityToOffer = Number(form.getValues('equityToOffer'));
    const denom = Number(
      form.getValues(StepThreeRecountFieldByLotType[data.lotType]),
    );

    if (!cv0 || !fdv0 || !denom) {
      form.setValue(currentID, value);
      return;
    }
    const { _bindedID, _result, _currentID } = getRecountedValue({
      cv1,
      cv0,
      fdv1,
      fdv0,
      equityToOffer,
      value,
      denom,
      pricingModel,
      currentID,
      bindedID,
    });

    // TODO: Типизировать нормально
    form.setValue(_bindedID as any, _result);
    form.setValue(_currentID as any, value);
  }

  function toggleTypeOfDeal(dealType) {
    form.reset(getDefaultValues(dealType));
    setTypeOfDeal(dealType);
  }

  return (
    <HStack justifyContent={'center'} mt={'20px'} gap="2rem">
      <FormWrapper width="100%">
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
              { label: 'Sell', value: 'Sell' },
            ]}
            onChange={toggleTypeOfDeal}
            variant="solid"
            value={typeOfDeal}
            mapColorByValue={(value) => {
              if (value === 'Sell') return 'red.500';
              if (value === 'Buy') return 'green.500';
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
                <Badge>{typeOfDeal === 'Sell' ? 3 : 2} step</Badge>
                <Text fontSize="sm" fontWeight="bold">
                  {typeOfDeal === 'Sell' ? 'Pricing details' : 'Lot info'}
                </Text>
              </HStack>
              <ProjectDetails
                // @ts-ignore
                form={form}
                lotType={data.lotType as ILotType}
                handleRecountValues={handleRecountValues}
                label={'Pricing model'}
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
