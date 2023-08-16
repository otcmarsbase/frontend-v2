import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Checkbox, Input, VStack } from '@chakra-ui/react';
import { FormBlockElement, FormField, UseFormReturn } from '@shared/ui-kit';
import { DatePickerComp } from '@shared/ui-kit/components/DataPicker';
import { PriceInfo } from '../PriceInfo';
import { TokenInfoFields } from './constants';

export const TokenInfo: FC<{
  form: UseFormReturn;
  lotType: string;
  handleRecountPriceInfoValues: (curIds: [], id: string, value: string) => void;
}> = observer((props) => {
  const { lotType, form, handleRecountPriceInfoValues } = props;
  const { register, getValues, formState, setValue, isRequired } = form;
  const { errors } = formState;

  return (
    <VStack gap="2.25rem">
      <FormBlockElement
        label={TokenInfoFields.INVESTMENT_ROUND}
        isRequired={isRequired('investmentRound')}
      >
        <FormField
          register={register}
          errors={errors}
          name="investmentRound"
          value={getValues('investmentRound')}
          component={<Input placeholder={TokenInfoFields.INVESTMENT_ROUND} />}
        />
      </FormBlockElement>

      <FormBlockElement
        label={TokenInfoFields.ROUND_FDV}
        isRequired={isRequired('roundFDV')}
      >
        <FormField
          register={register}
          errors={errors}
          name="roundFDV"
          value={getValues('roundFDV')}
          component={
            <Input type="number" placeholder={TokenInfoFields.ROUND_FDV} />
          }
        />
      </FormBlockElement>

      <FormBlockElement
        label={TokenInfoFields.CONTRACT_VALUE}
        isRequired={isRequired('contractValue')}
      >
        <FormField
          register={register}
          errors={errors}
          name="contractValue"
          value={getValues('contractValue')}
          component={
            <Input type="number" placeholder={TokenInfoFields.CONTRACT_VALUE} />
          }
        />
      </FormBlockElement>
      {lotType !== 'SAFE' && (
        <>
          <FormBlockElement
            label={TokenInfoFields.DATES}
            // isRequired={isRequired('lockupPeriod')}
          >
            <DatePickerComp
              handleGetDate={(date) => setValue('dates', date)}
              isDatePickerDisabled={false}
            />
          </FormBlockElement>

          <FormBlockElement
            label={TokenInfoFields.LOOKUP_PERIOD}
            isRequired={isRequired('lockupPeriod')}
          >
            <FormField
              register={register}
              errors={errors}
              name="lockupPeriod"
              value={getValues('lockupPeriod')}
              component={
                <Input
                  type="number"
                  placeholder={TokenInfoFields.LOOKUP_PERIOD}
                />
              }
            />
            <FormField
              register={register}
              name="alreadyOver"
              value={getValues('alreadyOver')}
              component={<Checkbox>{TokenInfoFields.ALREADY_OVER}</Checkbox>}
            />
          </FormBlockElement>
          <FormBlockElement
            label={TokenInfoFields.VESTING_PERIOD}
            isRequired={isRequired('vestingPeriod')}
          >
            <FormField
              register={register}
              errors={errors}
              name="vestingPeriod"
              value={getValues('vestingPeriod')}
              component={
                <Input
                  type="number"
                  placeholder={TokenInfoFields.VESTING_PERIOD}
                />
              }
            />
          </FormBlockElement>
        </>
      )}
      <FormBlockElement
        label="Price information"
        isRequired={isRequired('target_fdv') || isRequired('price_per_equity')}
      >
        <PriceInfo
          form={props.form}
          lotType={lotType}
          label="Price info"
          helperText="Automatically calculated"
          handleRecountPriceInfoValues={handleRecountPriceInfoValues}
        />
      </FormBlockElement>
    </VStack>
  );
});