import { FC, useEffect, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { formatNumberProps } from '../formatNumberProps';
import { FormElementNumberInput } from '../FormElementNumberInput';
import { BaseInputProps } from '../types';
import { useDefaultValueSetter } from '../useDefaultValueSetter';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';
import { useCommonPriceChange } from './useHandleChange';

const NAME = 'COMMON_PRICE';

export const CommonPriceInput: FC<BaseInputProps> = () => {
  const { value, watch, rhfSetValue, rhfTrigger } = useInput(NAME);
  const [type] = watch(['type']);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);
  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  useDefaultValueSetter(NAME, 'INVEST_DOC_ROUND_PRICE');

  const handleChange = useCommonPriceChange();

  useEffect(() => {
    if (!value || type === 'SAFT') return;

    const newFdv = new Decimal(value).mul(100).mul(multiplicator).toString();
    rhfSetValue('INVEST_DOC_FDV', newFdv);
    rhfTrigger('INVEST_DOC_FDV');
  }, [value, type, rhfSetValue, rhfTrigger, multiplicator]);

  return (
    <FormElementNumberInput
      name={NAME}
      {...descriptor}
      onChange={handleChange}
      {...formatNumberProps()}
      gridProps={{ gridTemplateColumns: '12rem 2fr' }}
    />
  );
};
