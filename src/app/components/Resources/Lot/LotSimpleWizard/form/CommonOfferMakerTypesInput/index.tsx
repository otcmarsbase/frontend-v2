import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { ParticipantTypeSelect } from '@app/components';
import { FormLabel } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, SuggestionIcon, Tooltip } from '@shared/ui-kit';

import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { BuyTooltipDictionary, DescriptorDictionary, SellTooltipDictionary } from './const';

const NAME = 'COMMON_OFFER_MAKER_TYPES';

export const CommonOfferMakerTypesInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, watch } = useInput(NAME);
  const [direction, isDirect] = watch(['COMMON_DIRECTION', 'COMMON_IS_DIRECT']);

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  const tooltip = useMemo(() => {
    switch (direction) {
      case 'BUY':
        return BuyTooltipDictionary.get(isDirect);
      case 'SELL':
        return SellTooltipDictionary.get(isDirect);
    }
  }, [direction, isDirect]);

  return (
    <FormControl isInvalid={!isValid} label={descriptor.label} isRequired={isRequired} w="full">
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
        <Tooltip label={tooltip}>
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Controller
        name={NAME}
        render={({ field }) => (
          <ParticipantTypeSelect
            {...field}
            isMulti
            isInvalid={!isValid}
            onChange={field.onChange}
            placeholder={descriptor.placeholder}
          />
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
