import { FC, useCallback, useEffect, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_PRICE';

export const CommonPriceInput: FC<BaseInputProps> = () => {
  const { watch, setValue, trigger } = useInput(NAME);
  const [type, COMMON_UNITS, COMMON_SUMMARY, INVEST_DOC_ROUND_PRICE] = watch([
    'type',
    'COMMON_UNITS',
    'COMMON_SUMMARY',
    'INVEST_DOC_ROUND_PRICE',
  ]);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  useEffect(() => {
    if (!(COMMON_UNITS && COMMON_SUMMARY)) return;

    const newValue = new Decimal(COMMON_SUMMARY)
      .div(new Decimal(COMMON_UNITS).mul(multiplicator))
      .div(multiplicator)
      .toString();

    setValue(newValue);
    trigger();
  }, [setValue, trigger, COMMON_UNITS, COMMON_SUMMARY, multiplicator]);

  const onChange = useCallback(
    (value: number) => {
      if (!(value && INVEST_DOC_ROUND_PRICE)) return;
    },
    [INVEST_DOC_ROUND_PRICE],
  );

  return <FormControlNumberInput name={NAME} {...descriptor} onChange={onChange} />;
};
