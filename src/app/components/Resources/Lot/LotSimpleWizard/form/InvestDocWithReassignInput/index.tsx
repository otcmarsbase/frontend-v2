import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { LotReassignmentTypeDictionary } from '@app/dictionary';
import { FormControl, FormLabel, FormErrorMessage, Checkbox, Flex } from '@chakra-ui/react';
import { SuggestionIcon, Tooltip } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_REASSIGNMENT_TYPE';

export const InvestDocWithReassignInput: FC<BaseInputProps> = (props) => {
  const { isRequired, isValid, error, watch } = useInput(NAME);

  const direction = watch('COMMON_DIRECTION');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
        <Tooltip label={descriptor.tooltip}>
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Flex justifyContent="space-between">
        {LotReassignmentTypeDictionary.entries().map(([key, value]) => (
          <Controller
            name={NAME}
            key={key}
            render={({ field }) => (
              <Checkbox
                isChecked={field.value === key}
                {...field}
                flexGrow="1"
                onChange={(e) => e.target.checked && field.onChange(key)}
                required={false}
              >
                {value}
              </Checkbox>
            )}
          />
        ))}
      </Flex>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
