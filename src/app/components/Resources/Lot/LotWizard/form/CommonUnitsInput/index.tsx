import { FC, useEffect, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';
import { useMultiplicatorValue } from '../useMultiplicatorValue';

import { DescriptorDictionary } from './const';

const NAME = 'COMMON_UNITS';

export const CommonUnitsInput: FC<BaseInputProps> = () => {
  const { watch, setValue, trigger } = useInput(NAME);
  const [type, INVEST_DOC_ROUND_UNITS] = watch(['type', 'INVEST_DOC_ROUND_UNITS']);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const { serializeValue, deserializeValue } = useMultiplicatorValue(type);
  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  const max = useMemo(
    () => (INVEST_DOC_ROUND_UNITS ? new Decimal(INVEST_DOC_ROUND_UNITS).div(multiplicator).toNumber() : Infinity),
    [INVEST_DOC_ROUND_UNITS, multiplicator],
  );

  useEffect(() => {
    if (!INVEST_DOC_ROUND_UNITS) return;

    setValue(INVEST_DOC_ROUND_UNITS);
    trigger();
  }, [INVEST_DOC_ROUND_UNITS, setValue, trigger]);

  return (
    <FormControlNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
      max={max}
    />
  );
};
