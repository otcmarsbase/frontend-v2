import { VStack } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { RawField } from '@shared/ui-kit/components/RawFIeld/RawField';
import { RawCheckbox } from '@shared/ui-kit/components/RawCheckbox/RawCheckbox';
import { UseFormReturn } from 'react-hook-form';
import { FC } from 'react';
import { TokenInfoFields } from '../consts';
import { PriceInfo } from '../../PriceInfo/PriceInfo/PriceInfo';

export const StepTwo: FC<{
  form: UseFormReturn;
  lotType: string;
  handleRecountPriceInfoValues: (curIds: [], id: string, value: string) => void;
}> = observer((props) => {
  const { form, lotType, handleRecountPriceInfoValues } = props;
  const { register, getValues, formState, setValue } = form;
  const { errors } = formState;

  return (
    <VStack bg={'skyblue'}>
      <RawField
        register={{ ...register('investmentRound') }}
        errors={errors}
        placeholder={'Enter type'}
        id={'investmentRound'}
        value={getValues('investmentRound')}
        label={TokenInfoFields.INVESTMENT_ROUND}
      />

      <RawField
        register={{ ...register('roundFDV'), type: 'number' }}
        errors={errors}
        id={'roundFDV'}
        placeholder={'Amount'}
        value={getValues('roundFDV')}
        label={TokenInfoFields.ROUND_FDV}
      />
      <RawField
        register={{ ...register('contractValue'), type: 'number' }}
        errors={errors}
        id={'contractValue'}
        placeholder={'Amount'}
        value={getValues('contractValue')}
        label={TokenInfoFields.CONTRACT_VALUE}
      />
      {lotType !== 'SAFE' && (
        <>
          <RawField
            register={{ ...register('lockupPeriod'), type: 'number' }}
            errors={errors}
            id={'lockupPeriod'}
            placeholder={'Enter amount'}
            value={getValues('lockupPeriod')}
            label={TokenInfoFields.LOOKUP_PERIOD}
          />
          <RawCheckbox
            handleChange={(id, value) => setValue(id, value)}
            id={'alreadyOver'}
            value={getValues('alreadyOver')}
            label={TokenInfoFields.ALREADY_OVER}
          />
          <RawField
            register={{ ...register('vestingPeriod'), type: 'number' }}
            errors={errors}
            id={'vestingPeriod'}
            placeholder={'Enter amount'}
            value={getValues('vestingPeriod')}
            label={TokenInfoFields.VESTING_PERIOD}
          />
        </>
      )}
      <PriceInfo
        form={props.form}
        label={'Price information'}
        lotType={lotType}
        handleRecountPriceInfoValues={handleRecountPriceInfoValues}
        helperText={
          'You must enter any 3 numbers, then is automatically calculated.'
        }
      />
    </VStack>
  );
});
