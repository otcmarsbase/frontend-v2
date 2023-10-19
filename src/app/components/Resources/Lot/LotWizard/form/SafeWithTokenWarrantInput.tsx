import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Flex } from '@chakra-ui/react';
import { FormControl, Checkbox } from '@shared/ui-kit';

import { BaseInputProps } from './types';

const NAME = 'SAFE_WITH_TOKEN_WARRANT_INPUT';

export const SafeWithTokenWarrantInput: FC<BaseInputProps> = () => {
  return (
    <FormControl>
      <Controller
        name={NAME}
        render={({ field }) => (
          <Checkbox isChecked={!!field.value} {...field}>
            <Flex alignItems="center" gap="0.25rem">
              Token Warrant
            </Flex>
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
