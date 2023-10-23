import { FC, useCallback, useEffect, useMemo } from 'react';

import Decimal from 'decimal.js';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_PRICE';

export const CommonPriceInput: FC<BaseInputProps> = () => {
  const { watch, setValue, trigger, rhfSetValue, rhfTrigger } = useInput(NAME);
  const [type, COMMON_UNITS, COMMON_SUMMARY, INVEST_DOC_ROUND_FDV, INVEST_DOC_ROUND_PRICE] = watch([
    'type',
    'COMMON_UNITS',
    'COMMON_SUMMARY',
    'INVEST_DOC_ROUND_FDV',
    'INVEST_DOC_ROUND_PRICE',
  ]);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const handleChange = useCallback(
    (value: number | string) => {
      if (!(value && INVEST_DOC_ROUND_PRICE && INVEST_DOC_ROUND_FDV)) return;

      const INVEST_DOC_FDV = new Decimal(value)
        .div(new Decimal(INVEST_DOC_ROUND_PRICE))
        .mul(new Decimal(INVEST_DOC_ROUND_FDV))
        .toString();

      rhfSetValue('INVEST_DOC_FDV', INVEST_DOC_FDV);
      rhfTrigger('INVEST_DOC_FDV');
    },
    [rhfSetValue, rhfTrigger, INVEST_DOC_ROUND_FDV, INVEST_DOC_ROUND_PRICE],
  );

  useEffect(() => {
    if (!(COMMON_UNITS && COMMON_SUMMARY)) return;

    const newValue = new Decimal(COMMON_SUMMARY).div(new Decimal(COMMON_UNITS)).toString();

    setValue(newValue);
    trigger();
    handleChange(newValue);
  }, [handleChange, setValue, trigger, COMMON_UNITS, COMMON_SUMMARY]);

  return <FormControlNumberInput name={NAME} {...descriptor} onChange={handleChange} />;
};
