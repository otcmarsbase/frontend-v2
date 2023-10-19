import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Flex } from '@chakra-ui/react';
import { FormControl, Checkbox, SuggestionIcon, Tooltip } from '@shared/ui-kit';

import { BaseInputProps } from './types';

const NAME = 'INVEST_DOC_WITH_REASSIGN_INPUT';

export const InvestDocWithReassignInput: FC<BaseInputProps> = () => {
  return (
    <FormControl>
      <Controller
        name={NAME}
        render={({ field }) => (
          <Checkbox isChecked={!!field.value} {...field}>
            <Flex alignItems="center" gap="0.25rem">
              Re-assign
              <Tooltip label={'"Re-assign" means that the offer-maker allows the resale or transfer of their lot.'}>
                <SuggestionIcon />
              </Tooltip>
            </Flex>
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
