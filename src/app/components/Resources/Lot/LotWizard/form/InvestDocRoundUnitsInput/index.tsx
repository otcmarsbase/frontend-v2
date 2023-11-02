import { FC, useCallback, useEffect, useMemo } from 'react';

import { useLotMultiplicatorValue } from '@app/hooks';
import Decimal from 'decimal.js';

import { formatNumberProps } from '../formatNumberProps';
import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_ROUND_UNITS';

export const InvestDocRoundUnitsInput: FC<BaseInputProps> = () => {
  const { watch, setValue, trigger, rhfSetValue, rhfTrigger } = useInput(NAME);
  const [type, INVEST_DOC_ROUND_SHARE, INVEST_DOC_ROUND_SUMMARY] = watch([
    'type',
    'INVEST_DOC_ROUND_SHARE',
    'INVEST_DOC_ROUND_SUMMARY',
  ]);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const { serializeValue, deserializeValue } = useLotMultiplicatorValue(type);

  const handleChange = useCallback(
    (value: number | string) => {
      if (!(value && INVEST_DOC_ROUND_SUMMARY)) return;

      const INVEST_DOC_ROUND_PRICE = new Decimal(INVEST_DOC_ROUND_SUMMARY).div(new Decimal(value)).toString();

      rhfSetValue('INVEST_DOC_ROUND_PRICE', INVEST_DOC_ROUND_PRICE);
      rhfTrigger();
    },
    [INVEST_DOC_ROUND_SUMMARY, rhfSetValue, rhfTrigger],
  );

  useEffect(() => {
    if (type === 'SAFT' || !INVEST_DOC_ROUND_SHARE) return;

    const newValue = new Decimal(INVEST_DOC_ROUND_SHARE).mul(10000).toString();
    setValue(newValue);
    trigger();
    handleChange(newValue);
  }, [handleChange, INVEST_DOC_ROUND_SHARE, setValue, trigger, type]);

  return (
    <FormControlNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
      onChange={handleChange}
      {...formatNumberProps()}
    />
  );
};
