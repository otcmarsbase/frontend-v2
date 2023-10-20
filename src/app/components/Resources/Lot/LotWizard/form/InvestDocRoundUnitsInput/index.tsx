import { FC, useCallback, useEffect, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_ROUND_UNITS';

export const InvestDocRoundUnitsInput: FC<BaseInputProps> = () => {
  const { watch, setValue, trigger } = useInput(NAME);
  const [type, INVEST_DOC_ROUND_SHARE] = watch(['type', 'INVEST_DOC_ROUND_SHARE']);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  useEffect(() => {
    if (type === 'SAFT') return;

    setValue(INVEST_DOC_ROUND_SHARE.toString());
    trigger();
  }, [INVEST_DOC_ROUND_SHARE, setValue, trigger, type]);

  const serializeValue = useCallback(
    (value: string) => {
      if (!value) return value;

      return new Decimal(value).mul(multiplicator).toString();
    },
    [multiplicator],
  );

  const deserializeValue = useCallback(
    (value: string) => {
      if (!value) return value;

      return new Decimal(value).div(multiplicator).toString();
    },
    [multiplicator],
  );

  return (
    <FormControlNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
    />
  );
};
