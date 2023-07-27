import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { VStack } from '@chakra-ui/react';
import { FormBlockElement, FormField, UseFormReturn } from '@shared/ui-kit';
import { RawCheckbox } from '@shared/ui-kit/components/RawCheckbox/RawCheckbox';
import { SaftPriceInfo } from '../PriceInfo/SaftPriceInfo';
import { TokenInfoFields } from './consts';

export const TokenInfo: FC<{ form: UseFormReturn }> = observer((props) => {
  const { register, getValues, formState, setValue, isRequired } = props.form;
  const { errors } = formState;

  return (
    <VStack gap="2.25rem">
      <FormBlockElement
        label={TokenInfoFields.INVESTMENT_ROUND}
        isRequired={isRequired('investmentRound')}
      >
        <FormField
          register={{ ...register('investmentRound') }}
          errors={errors}
          id={'investmentRound'}
          value={getValues('investmentRound')}
          placeholder={TokenInfoFields.INVESTMENT_ROUND}
        />
      </FormBlockElement>

      <FormBlockElement
        label={TokenInfoFields.ROUND_FDV}
        isRequired={isRequired('roundFDV')}
      >
        <FormField
          register={{ ...register('roundFDV'), type: 'number' }}
          errors={errors}
          id={'roundFDV'}
          value={getValues('roundFDV')}
          placeholder={TokenInfoFields.ROUND_FDV}
        />
      </FormBlockElement>

      <FormBlockElement
        label={TokenInfoFields.CONTRACT_VALUE}
        isRequired={isRequired('contractValue')}
      >
        <FormField
          register={{ ...register('contractValue'), type: 'number' }}
          errors={errors}
          id={'contractValue'}
          value={getValues('contractValue')}
          placeholder={TokenInfoFields.CONTRACT_VALUE}
        />
      </FormBlockElement>

      <FormBlockElement
        label={TokenInfoFields.LOOKUP_PERIOD}
        isRequired={isRequired('lockupPeriod')}
      >
        <FormField
          register={{ ...register('lockupPeriod'), type: 'number' }}
          errors={errors}
          id={'lockupPeriod'}
          value={getValues('lockupPeriod')}
          placeholder={TokenInfoFields.LOOKUP_PERIOD}
        />
        <RawCheckbox
          handleChange={(id, value) => setValue(id, value)}
          id={'alreadyOver'}
          value={getValues('alreadyOver')}
          label={TokenInfoFields.ALREADY_OVER}
        />
      </FormBlockElement>

      <FormBlockElement
        label={TokenInfoFields.VESTING_PERIOD}
        isRequired={isRequired('vestingPeriod')}
      >
        <FormField
          register={{ ...register('vestingPeriod'), type: 'number' }}
          errors={errors}
          id={'vestingPeriod'}
          value={getValues('vestingPeriod')}
          placeholder={TokenInfoFields.VESTING_PERIOD}
        />
      </FormBlockElement>

      <FormBlockElement
        label={'Price information'}
        isRequired={isRequired('target_fdv') || isRequired('price_per_equity')}
      >
        <SaftPriceInfo
          form={props.form}
          ids={['target_fdv', 'price_per_equity']}
          TokenInfoFields={TokenInfoFields}
          helperText={
            'You must enter any 3 numbers, then is automatically calculated.'
          }
        />
      </FormBlockElement>
    </VStack>
  );
});
