import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, InputGroup, InputRightElement, FormErrorMessage, Text } from '@chakra-ui/react';
import { FormElement, UIKit } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'TOKEN_LOCKUP_PERIOD';

export const TokenLockupPeriodInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormElement
      label="Lockup period"
      info="A lockup period is a specific duration of time during which certain individuals or entities, typically early investors, founders, or team members, are restricted from selling or transferring their vested tokens or shares."
      isRequired={isRequired}
      w="full"
    >
      <FormControl isInvalid={!isValid}>
        <Controller name={NAME} render={(props) => <UIKit.Input {...props.field} placeholder="Enter value" />} />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </FormElement>
  );
};
