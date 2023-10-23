import { FC, useCallback } from 'react';

import Decimal from 'decimal.js';

import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_FDV';

export const InvestDocFdvInput: FC<BaseInputProps> = () => {
  const { rhfTrigger, watch, rhfSetValue } = useInput(NAME);

  const [INVEST_DOC_ROUND_PRICE, INVEST_DOC_ROUND_FDV] = watch(['INVEST_DOC_ROUND_PRICE', 'INVEST_DOC_ROUND_FDV']);

  const handleChange = useCallback(
    (value: number) => {
      if (!(value && INVEST_DOC_ROUND_PRICE && INVEST_DOC_ROUND_FDV)) return;

      const newValue = new Decimal(value)
        .div(new Decimal(INVEST_DOC_ROUND_FDV))
        .mul(new Decimal(INVEST_DOC_ROUND_PRICE))
        .toString();

      rhfSetValue('COMMON_PRICE', newValue);
      rhfTrigger('COMMON_PRICE');
    },
    [rhfSetValue, rhfTrigger, INVEST_DOC_ROUND_FDV, INVEST_DOC_ROUND_PRICE],
  );

  return (
    <FormControlNumberInput
      name={NAME}
      label="Target FDV"
      placeholder="Amount"
      rightElementText="$"
      tooltip="FDV = market price * maximum supply"
      onChange={handleChange}
    />
  );
};
