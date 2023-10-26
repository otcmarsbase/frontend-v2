import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import { FormElement, UIKit } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'TOKEN_VESTING_PERIOD';

export const TokenVestingPeriodInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormElement label="Vesting calendar" isRequired={isRequired} w="full">
      <FormControl isInvalid={!isValid}>
        <Controller name={NAME} render={(props) => <UIKit.Input {...props.field} placeholder="Enter value" />} />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </FormElement>
  );
};
