import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Input } from '@chakra-ui/react';
import { FormControl, FormElement, FormErrorMessage, UIKit } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_TELEGRAM';

export const CommonTelegramInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormElement label="Telegram" info="Please provide your Telegram account" isRequired={isRequired} w="full">
      <FormControl isInvalid={!isValid}>
        <Controller name={NAME} render={({ field }) => <UIKit.Input {...field} placeholder="@nickname" />} />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </FormElement>
  );
};
