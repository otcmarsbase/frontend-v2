import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { TradeDirectionDictionary } from '@app/dictionary';
import { FormControl, FormErrorMessage, RadioButtons, FormElement } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_DIRECTION_INPUT';

export const CommonDirectionInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormElement label="Trade direction" info="Choose Lot Type: BUY or SELL" isRequired={isRequired}>
      <FormControl isInvalid={!isValid}>
        <Controller
          name={NAME}
          render={({ field }) => (
            <RadioButtons
              variant="solid"
              value={field.value}
              renderKey={(item) => item}
              onChange={(value) => {
                field.onChange({ target: { name: field.name, value } });
              }}
              renderItem={(item) => TradeDirectionDictionary.get(item).title}
              renderColorByValue={(item) => (item === 'BUY' ? 'green.500' : 'red.500')}
              items={TradeDirectionDictionary.keys()}
              isInvalid={!isValid}
            />
          )}
        />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </FormElement>
  );
};
