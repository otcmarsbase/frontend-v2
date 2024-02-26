import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormErrorMessage, FormLabel, SuggestionIcon, Tooltip, UIKit } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'TOKEN_VESTING_PERIOD';

export const TokenVestingPeriodInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Vesting
        <Tooltip label="Vesting shedule and cliff period">
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>

      <Controller name={NAME} render={(props) => <UIKit.Input {...props.field} placeholder="Enter value" />} />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
