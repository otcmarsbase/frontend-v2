import { FC, useEffect, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_ROUND_PRICE';

export const InvestDocRoundPriceInput: FC<BaseInputProps> = () => {
  const { watch, setValue, trigger } = useInput(NAME);
  const [type, INVEST_DOC_ROUND_SUMMARY, INVEST_DOC_ROUND_UNITS] = watch([
    'type',
    'INVEST_DOC_ROUND_SUMMARY',
    'INVEST_DOC_ROUND_UNITS',
  ]);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  useEffect(() => {
    if (!(INVEST_DOC_ROUND_UNITS && INVEST_DOC_ROUND_SUMMARY)) return;

    const newValue = new Decimal(INVEST_DOC_ROUND_SUMMARY)
      .div(new Decimal(INVEST_DOC_ROUND_UNITS).mul(multiplicator))
      .div(multiplicator)
      .toString();

    setValue(newValue);
    trigger();
  }, [INVEST_DOC_ROUND_UNITS, INVEST_DOC_ROUND_SUMMARY, setValue, trigger, multiplicator]);

  return <FormControlNumberInput name={NAME} {...descriptor} />;
};
