import { FC, useCallback } from 'react';

import Decimal from 'decimal.js';

import { formatNumberProps } from './formatNumberProps';
import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';
import { useDefaultValueSetter } from './useDefaultValueSetter';
import { useInput } from './useInput';

const NAME = 'COMMON_SUMMARY';

export const CommonSummaryInput: FC<BaseInputProps> = () => {
  const { watch, rhfSetValue, rhfTrigger } = useInput(NAME);

  const [COMMON_PRICE, COMMON_UNITS] = watch(['COMMON_PRICE', 'COMMON_UNITS']);

  useDefaultValueSetter(NAME, 'INVEST_DOC_ROUND_SUMMARY');

  const handleChange = useCallback(
    (value: number) => {
      if (!value) return;

      if (COMMON_UNITS) {
        const newPrice = new Decimal(value).div(new Decimal(COMMON_UNITS)).toString();
        rhfSetValue('COMMON_PRICE', newPrice);
        rhfTrigger('COMMON_PRICE');
        return;
      }

      if (COMMON_PRICE) {
        const newUnits = new Decimal(value).div(new Decimal(COMMON_PRICE)).toString();
        rhfSetValue('COMMON_UNITS', newUnits);
        rhfTrigger('COMMON_UNITS');
        return;
      }
    },
    [COMMON_PRICE, COMMON_UNITS, rhfSetValue, rhfTrigger],
  );

  return (
    <FormControlNumberInput
      name={NAME}
      label="Contract size to offer"
      placeholder="Amount"
      rightElementText="$"
      tooltip="The amount of sale in this lot. The seller will receive this amount."
      onChange={handleChange}
      {...formatNumberProps()}
    />
  );
};
