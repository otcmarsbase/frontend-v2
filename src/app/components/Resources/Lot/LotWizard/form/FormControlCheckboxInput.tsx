import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Flex } from '@chakra-ui/react';
import { FormControl, Checkbox, SuggestionIcon, Tooltip } from '@shared/ui-kit';

import { BaseInputProps, InputDescriptor } from './types';

export const FormControlCheckboxInput: FC<BaseInputProps & InputDescriptor> = ({ name, label, tooltip }) => {
  return (
    <FormControl>
      <Controller
        name={name}
        render={({ field }) => (
          <Checkbox isChecked={!!field.value} {...field}>
            <Flex alignItems="center" gap="0.25rem">
              {label}
              {tooltip && (
                <Tooltip label={tooltip}>
                  <SuggestionIcon />
                </Tooltip>
              )}
            </Flex>
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
