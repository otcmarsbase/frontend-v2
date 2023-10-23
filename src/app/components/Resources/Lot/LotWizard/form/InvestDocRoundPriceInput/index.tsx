import { FC, useCallback, useMemo } from 'react';

import Decimal from 'decimal.js';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_ROUND_PRICE';

export const InvestDocRoundPriceInput: FC<BaseInputProps> = () => {
  const { watch, rhfSetValue, rhfTrigger } = useInput(NAME);
  const [type, INVEST_DOC_ROUND_SUMMARY] = watch(['type', 'INVEST_DOC_ROUND_SUMMARY', 'INVEST_DOC_ROUND_UNITS']);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const handleChange = useCallback(
    (value: number) => {
      if (!(value && INVEST_DOC_ROUND_SUMMARY)) return;

      const newValue = new Decimal(INVEST_DOC_ROUND_SUMMARY).div(new Decimal(value)).toString();

      rhfSetValue('INVEST_DOC_ROUND_UNITS', newValue);
      rhfTrigger();
    },
    [INVEST_DOC_ROUND_SUMMARY, rhfSetValue, rhfTrigger],
  );

  return <FormControlNumberInput name={NAME} {...descriptor} onChange={handleChange} />;
};
