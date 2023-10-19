import { FC, useMemo } from 'react';
import { Controller, useWatch } from 'react-hook-form';

import { Flex } from '@chakra-ui/react';
import { FormControl, Checkbox } from '@shared/ui-kit';

import { LotCreateModel } from '../../schema';
import { BaseInputProps } from '../types';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_MEDIATOR_INPUT';

export const CommonMediatorInput: FC<BaseInputProps> = () => {
  // TODO: Fix value type
  const direction = useWatch<LotCreateModel>({ name: 'COMMON_DIRECTION_INPUT' }) as any;

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  return (
    <FormControl>
      <Controller
        name={NAME}
        render={({ field }) => (
          <Checkbox
            isChecked={field.value === 'DIRECT'}
            onChange={(e) => {
              field.onChange(e.target.checked ? 'DIRECT' : 'OTC_AGENT');
            }}
          >
            <Flex alignItems="center" gap="0.25rem">
              {descriptor.label}
            </Flex>
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
