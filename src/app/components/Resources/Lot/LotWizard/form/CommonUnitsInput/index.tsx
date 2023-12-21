import { FC, useCallback, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import { useLotMultiplicatorValue } from '@app/hooks';
import Decimal from 'decimal.js';

import { formatNumberProps } from '../formatNumberProps';
import { FormElementNumberInput } from '../FormElementNumberInput';
import { BaseInputProps } from '../types';
import { useDefaultValueSetter } from '../useDefaultValueSetter';
import { useInput } from '../useInput';

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

  const { serializeValue, deserializeValue } = useLotMultiplicatorValue(type);
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
    <FormElementNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
      max={max}
      onChange={handleChange}
      gridProps={{ gridTemplateColumns: { base: '1fr', md: '12rem 2fr' } }}
      {...formatNumberProps()}
    />
  );
};
