import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormErrorMessage, FormLabel, SuggestionIcon, Tooltip, UIKit } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_TELEGRAM';

export const CommonTelegramInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Telegram
        <Tooltip label="Your tg for additional clarifications">
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Controller name={NAME} render={({ field }) => <UIKit.InputTelegram {...field} placeholder="@nickname" />} />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
