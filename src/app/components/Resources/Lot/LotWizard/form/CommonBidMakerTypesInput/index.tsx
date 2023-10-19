import { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';

import { LotCreateModel, UILogic } from '@app/components';
import { Checkbox, Flex, HStack, VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormElement } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_BID_MAKER_TYPES_INPUT';

export const CommonBidMakerTypesInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, setValue } = useInput(NAME);
  const direction = useWatch<LotCreateModel>({ name: 'COMMON_DIRECTION_INPUT' }) as any;

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  const [noLimit, setNoLimit] = useState(false);

  useEffect(() => {
    if (noLimit) setValue(null);
  }, [noLimit, setValue]);

  return (
    <FormElement label={descriptor.label} info={descriptor.tooltip} isRequired={isRequired} w="full">
      <VStack gap="1rem">
        <FormControl isInvalid={!isValid}>
          <Controller
            name={NAME}
            render={({ field }) => (
              <UILogic.ParticipantTypeSelect
                {...field}
                isMulti
                onChange={field.onChange}
                placeholder={descriptor.placeholder}
                isDisabled={noLimit}
              />
            )}
          />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>

        <HStack w="full">
          <Checkbox
            isChecked={noLimit}
            onChange={(e) => {
              setNoLimit(e.target.checked);
            }}
          >
            <Flex alignItems="center" gap="0.25rem">
              No limitations
            </Flex>
          </Checkbox>
        </HStack>
      </VStack>
    </FormElement>
  );
};
