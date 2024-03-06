import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormErrorMessage, FormLabel, SuggestionIcon, Tooltip, UIKit } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_ADDITIONAL_INFO';

export const CommonAdditionalInfoInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Additional info
        <Tooltip label="Provide any additional details that could be relevant to potential investors.">
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Controller
        name={NAME}
        render={(props) => <UIKit.Textarea rows={5} {...props.field} placeholder="Enter value" />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
