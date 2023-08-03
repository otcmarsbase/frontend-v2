import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Input, VStack } from '@chakra-ui/react';
import { FormField, UseFormReturn } from '@shared/ui-kit';

export type TokenInfoSafeSchemaTypes =
  | 'investment_round'
  | 'round_fdv'
  | 'price_per_equity';

export const TokenInfoSafeFields = {
  INVESTMENT_ROUND: 'Investment round',
  ROUND_FDV: 'Round FDV',
  PRICE_PER_EQUITY: 'Price per 0,01% equity',
};

export const TokenInfoSafe: FC<{ form: UseFormReturn<any> }> = observer(
  ({ form }) => {
    const { register, getValues, formState } = form;
    const { errors } = formState;

    return (
      <VStack>
        <FormField
          register={register}
          errors={errors}
          name={'investment_round'}
          value={getValues('investment_round')}
          component={
            <Input placeholder={TokenInfoSafeFields.INVESTMENT_ROUND} />
          }
        />

        {/*<PriceInfo*/}
        {/*    form={form}*/}
        {/*    lotType={lotType}*/}
        {/*    label={'Price info'}*/}
        {/*    helperText={*/}
        {/*        'You must enter any 3 numbers, then is automatically calculated.'*/}
        {/*    }*/}
        {/*    handleRecountPriceInfoValues={handleRecountPriceInfoValues}*/}
        {/*/>*/}
      </VStack>
    );
  },
);
