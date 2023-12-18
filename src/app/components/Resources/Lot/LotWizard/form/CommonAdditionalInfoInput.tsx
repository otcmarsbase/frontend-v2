import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormElement, UIKit } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_ADDITIONAL_INFO';

export const CommonAdditionalInfoInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormElement label="Additional info" isRequired={isRequired} w="full" gridTemplateColumns="12rem 2fr">
      <FormControl isInvalid={!isValid}>
        <Controller name={NAME} render={(props) => <UIKit.Textarea {...props.field} placeholder="Enter value" />} />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </FormElement>
  );
};
