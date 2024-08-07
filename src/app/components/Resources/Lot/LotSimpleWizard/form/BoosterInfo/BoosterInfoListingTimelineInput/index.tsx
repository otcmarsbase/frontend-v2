import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { DatePicker, FormControl, FormErrorMessage, FormLabel } from '@shared/ui-kit';
import { Range } from 'react-calendar/dist/cjs/shared/types';

import { BaseInputProps } from '../../types';
import { useInput } from '../../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'BOOSTER_INFO_LISTING_TIMELINE';

export const BoosterInfoListingTimelineInput: FC<BaseInputProps> = () => {
  const { isRequired, isValid, error, watch } = useInput(NAME);

  const direction = watch('COMMON_DIRECTION');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  const onChange = (field, date: Date | Range<Date>) => {
    if (date) {
      field.onChange(date.valueOf());
    }
  };

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
      </FormLabel>
      <Controller
        name={NAME}
        render={({ field }) => <DatePicker onChange={(date) => onChange(field, date)} value={field.value} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
