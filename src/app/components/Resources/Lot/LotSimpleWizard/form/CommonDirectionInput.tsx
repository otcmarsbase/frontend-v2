import { Controller } from 'react-hook-form';

import { TradeDirectionDictionary } from '@app/dictionary';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { RadioButtons } from '@shared/ui-kit';

import { useInput } from './useInput';

const NAME = 'COMMON_DIRECTION';

export function CommonDirectionInput() {
  const { isRequired, isValid, error } = useInput(NAME);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired} w="full">
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Direction
      </FormLabel>
      <Controller
        name={NAME}
        render={({ field }) => (
          <RadioButtons
            variant="outline"
            value={field.value}
            renderKey={(item) => item}
            onChange={field.onChange}
            renderItem={(item) => TradeDirectionDictionary.get(item).title}
            items={TradeDirectionDictionary.keys()}
            isInvalid={!isValid}
          />
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
