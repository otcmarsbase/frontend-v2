import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { hasAllProperties, hasNoProperties } from '@app/pages/offers/utils';
import { useStore } from '@app/store';
import { HStack, VStack } from '@chakra-ui/react';
import { useForm } from '@shared/ui-kit';
import Decimal from 'decimal.js';
import { StepOne } from '../../../../features/StepOne';
import { YupProjectInfoShema } from '../../../../features/StepOne/consts';
import { ILotType } from '../../../../features/StepOne/types';
import { StepThree } from '../../../../features/StepThree';
import { StepThreeShema } from '../../../../features/StepThree/consts';
import { StepTwo } from '../../../../features/StepTwo';
import {
  STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE,
  YupTokenInfoShema,
} from '../../../../features/StepTwo/consts';
import { Summary } from './components';

function reorderItems<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  arr.push(value);
  arr.reverse();
  return arr;
}

export const CreateOffer = observer(() => {
  const { SellOfferStore } = useStore();
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
  } = SellOfferStore;
  const schema =
    YupProjectInfoShema.concat(YupTokenInfoShema).concat(StepThreeShema);

  const form = useForm({
    schema,
    defaultValues: {
      typesOfBuyer: [],
      typesOfSeller: [],
      projectName: '',
      projectWebsite: '',
      lotType: '',
      telegram: '',
      deadlineDate: '',
      investmentRound: '',
    },
  });
  const data = form.watch();

  useEffect(() => {
    //TODO add validations
    const hasStepOneFieldsDirty = hasAllProperties(form.formState.dirtyFields, [
      'projectName',
      'projectWebsite',
      'telegram',
    ]);
    const hasStepTwoFieldsDirty = hasAllProperties(form.formState.dirtyFields, [
      'investmentRound',
      'roundFDV',
      'contractValue',
    ]);
    const stepThreeFiledsValid =
      data.contractSizeToOffer > 0 && data.minDealSize > 0;

    const stepOneOnError = hasNoProperties(form.formState.errors, [
      'projectName',
      'projectWebsite',
      'telegram',
    ]);
    const stepTwoOnError = hasNoProperties(form.formState.errors, [
      'investmentRound',
      'roundFDV',
      'contractValue',
    ]);
    const stepThreeOnError = hasNoProperties(form.formState.errors, [
      'contractSizeToOffer',
      'minDealSize',
    ]);
    //TODO костылька
    const stepOnePassed =
      !stepOneOnError &&
      hasStepOneFieldsDirty &&
      data.lotType &&
      data.lotType.length > 0;
    setStepOneSuccess(stepOnePassed);
    if (stepOnePassed) {
      setStepOneWasOnSuccess(true);
    }

    const stepTwoPassed = !stepTwoOnError && hasStepTwoFieldsDirty;
    setStepTwoSuccess(stepTwoPassed);
    if (stepTwoPassed) {
      setStepTwoWasOnSuccess(true);
    }
    const stepThreePassed = !stepThreeOnError && stepThreeFiledsValid;
    setStepThreeSuccess(stepThreePassed);
    if (stepTwoPassed) {
      setStepThreeWasOnSuccess(true);
    }
    setBasicInfo(data);
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    if (!data.lotType) return;
    if (!data.contractValue) return;
    const fieldOne = STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[data.lotType][0].id;
    const fieldTwo = STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[data.lotType][1].id;

    const fieldOneValue = form.getValues(fieldOne);
    if (!fieldOneValue) {
      return;
    }

    const contractValue = new Decimal(data.contractValue);
    const recountedValue = contractValue.div(fieldOneValue).toString();

    form.setValue(fieldTwo, recountedValue);
  }, [data.contractValue]);

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

  function handleRecountValues(curIds, value) {
    const { currentID, bindedID } = curIds;

    // uq1 = 5,000,000 UNIT
    // fdv1 = 1,000,000,000 $
    //
    // ratio = uq1 / uq0 = 5,000,000 UNIT / 10,000,000 UNIT = 0.5
    // ratio = share1 / share0 ,=>,
    // share1 = ratio * share 0 = 0.5 * 1% = 0.5% (0.005)
    // cv1 = fdv1 * share1 = 1,000,000,000 $ * 0.005 = 5,000,000 $
    // up1 = cv1 / uq1 = 5,000,000 $ / 5,000,000 UNIT = 1 $ per UNIT

    // if (id === 'minDealSize') {
    //     form.setValue('contractSizeToOffer', (Number(value) + 3))
    //     form.setValue('minDealSize', Number(value))
    // } else {
    //     form.setValue('minDealSize', (Number(value) + 3))
    //     form.setValue('contractSizeToOffer', Number(value))
    // }
  }

  return (
    <HStack justifyContent={'center'} mt={'20px'} gap={'20px'} padding={'50px'}>
      <VStack>
        <StepOne
          // @ts-ignore
          form={form}
        />

        {stepOneWasOnSuccess || stepOneSuccess ? (
          <StepTwo
            // @ts-ignore
            form={form}
            lotType={data.lotType as ILotType}
            handleRecountPriceInfoValues={handleRecountPriceInfoValues}
          />
        ) : null}
        {(stepOneWasOnSuccess || stepOneSuccess) &&
        (stepTwoWasOnSuccess || stepTwoSuccess) ? (
          <StepThree
            // @ts-ignore
            form={form}
            lotType={data.lotType as ILotType}
            handleRecountValues={handleRecountValues}
            label={'Pricing model'}
          />
        ) : null}
      </VStack>
      <VStack h={'100%'} alignSelf={'flex-start'}>
        <Summary onPublishLot={() => {}} />
      </VStack>
    </HStack>
  );
});
