import { FC, useCallback, useEffect, useMemo, useRef } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { formatNumberProps } from '../formatNumberProps';
import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useDefaultValueSetter } from '../useDefaultValueSetter';
import { useInput } from '../useInput';
import { useMultiplicatorValue } from '../useMultiplicatorValue';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_UNITS';

export const CommonUnitsInput: FC<BaseInputProps> = () => {
  const { watch, rhfSetValue, rhfTrigger } = useInput(NAME);
  const [type, INVEST_DOC_ROUND_UNITS, COMMON_SUMMARY, COMMON_PRICE] = watch([
    'type',
    'INVEST_DOC_ROUND_UNITS',
    'COMMON_SUMMARY',
    'COMMON_PRICE',
  ]);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const { serializeValue, deserializeValue } = useMultiplicatorValue(type);
  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  const max = useMemo(
    () => (INVEST_DOC_ROUND_UNITS ? new Decimal(INVEST_DOC_ROUND_UNITS).div(multiplicator).toNumber() : Infinity),
    [INVEST_DOC_ROUND_UNITS, multiplicator],
  );

  useDefaultValueSetter(NAME, 'INVEST_DOC_ROUND_UNITS');

  const handleChange = useCallback(
    (value: number) => {
      if (!value) return;

      if (COMMON_SUMMARY) {
        const newPrice = new Decimal(COMMON_SUMMARY).div(new Decimal(value)).toString();
        rhfSetValue('COMMON_PRICE', newPrice);
        rhfTrigger('COMMON_PRICE');
        return;
      }

      if (COMMON_PRICE) {
        const newSummary = new Decimal(value).mul(new Decimal(COMMON_PRICE)).toString();
        rhfSetValue('COMMON_SUMMARY', newSummary);
        rhfTrigger('COMMON_SUMMARY');
        return;
      }
    },
    [COMMON_SUMMARY, COMMON_PRICE, rhfSetValue, rhfTrigger],
  );

  return (
    <FormControlNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
      max={max}
      onChange={handleChange}
      {...formatNumberProps()}
    />
  );
};
