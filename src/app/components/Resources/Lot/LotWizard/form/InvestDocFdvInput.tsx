import { FC, useCallback, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { useCommonPriceChange } from './CommonPriceInput/useHandleChange';
import { formatNumberProps } from './formatNumberProps';
import { FormElementNumberInput } from './FormElementNumberInput';
import { BaseInputProps } from './types';
import { useDefaultValueSetter } from './useDefaultValueSetter';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_FDV';

export const InvestDocFdvInput: FC<BaseInputProps> = () => {
  const { watch, rhfTrigger, rhfSetValue } = useInput(NAME);
  const [type] = watch(['type']);
  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  useDefaultValueSetter(NAME, 'INVEST_DOC_ROUND_FDV');

  const handleCommonPriceChange = useCommonPriceChange();

  const handleChange = useCallback(
    (value: number) => {
      if (!value) return;

      const newValue = new Decimal(value).div(100).div(multiplicator).toString();

      rhfSetValue('COMMON_PRICE', newValue);
      rhfTrigger('COMMON_PRICE');

      handleCommonPriceChange(newValue);
    },
    [rhfSetValue, rhfTrigger, multiplicator, handleCommonPriceChange],
  );

  return (
    <FormElementNumberInput
      name={NAME}
      label="Target FDV"
      placeholder="Amount"
      rightElementText="$"
      tooltip="FDV = market price * maximum supply"
      onChange={handleChange}
      gridProps={{ gridTemplateColumns: { base: '1fr', md: '12rem 2fr' } }}
      {...formatNumberProps()}
    />
  );
};
