import { FC, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { LotCreateModel } from '@app/components';
import { InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FormControl, FormLabel, InputNumber } from '@shared/ui-kit';

import { BaseInputProps } from '../../types';

import { DescriptorDictionary, RoundValueMap } from './const';

export const BoosterInfoDiscountToLastRound: FC<BaseInputProps> = () => {
  const { watch } = useFormContext<LotCreateModel>();

  const direction = watch('COMMON_DIRECTION');

  const targetValuation = watch('INVEST_DOC_FDV');
  const previousRound = watch('BOOSTER_INFO_PREVIOUS_ROUND_PRICE');

  const value = useMemo(() => {
    if (!targetValuation || !previousRound) {
      return null;
    }

    return Math.round(Number(targetValuation) / Number(previousRound) - 1);
  }, [targetValuation, previousRound]);

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  return (
    <FormControl isDisabled>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
      </FormLabel>
      <InputGroup>
        <InputNumber value={value} isDisabled placeholder={descriptor.placeholder} />
        <InputRightElement>
          <Text color="orange.500" fontSize="sm">
            %
          </Text>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
