import { FC, useCallback, useEffect, useMemo } from 'react';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import Decimal from 'decimal.js';

import { FormControlNumberInput } from '../FormControlNumberInput';
import { BaseInputProps } from '../types';
import { useInput } from '../useInput';
import { useMultiplicatorValue } from '../useMultiplicatorValue';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_ROUND_UNITS';

export const InvestDocRoundUnitsInput: FC<BaseInputProps> = () => {
  const { watch, setValue, trigger } = useInput(NAME);
  const [type, INVEST_DOC_ROUND_SHARE] = watch(['type', 'INVEST_DOC_ROUND_SHARE']);
  const descriptor = useMemo(() => DescriptorDictionary.get(type), [type]);

  const { serializeValue, deserializeValue } = useMultiplicatorValue(type);

  useEffect(() => {
    if (type === 'SAFT' || !INVEST_DOC_ROUND_SHARE) return;

    setValue(INVEST_DOC_ROUND_SHARE.toString());
    trigger();
  }, [INVEST_DOC_ROUND_SHARE, setValue, trigger, type]);

  return (
    <FormControlNumberInput
      name={NAME}
      {...descriptor}
      serializeValue={serializeValue}
      deserializeValue={deserializeValue}
    />
  );
};
