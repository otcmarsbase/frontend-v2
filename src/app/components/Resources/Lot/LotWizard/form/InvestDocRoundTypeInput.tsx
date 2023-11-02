import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic } from '@app/components';
import { FormControl, FormErrorMessage, FormElement } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_ROUND_TYPE';

export const InvestDocRoundTypeInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormElement label="Investment round" info="Choose the investment round." isRequired={isRequired} w="full">
      <FormControl isInvalid={!isValid}>
        <Controller
          name={NAME}
          render={({ field }) => (
            <UILogic.InvestmentRoundSelect
              {...field}
              isInvalid={!isValid}
              isClearable
              onChange={field.onChange}
              placeholder="Choose type"
            />
          )}
        />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </FormElement>
  );
};
