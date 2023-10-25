import { useCallback, useEffect, useMemo } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import Decimal from 'decimal.js';

import { CreateBidModel } from './schema';

export function usePriceChange(
  { watch, setValue, trigger }: UseFormReturn<CreateBidModel, any, any>,
  type: Resource.Lot.Enums.LotType,
) {
  const [price, units, summary] = watch(['price', 'units', 'summary']);

  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  useEffect(() => {
    if (!price || type === 'SAFT') return;

    const newFdv = new Decimal(price).mul(100).mul(multiplicator).toNumber();
    setValue('fdv', newFdv);
    trigger('fdv');
  }, [price, type, setValue, trigger, multiplicator]);

  return useCallback(
    (value: number | string) => {
      if (!value) return;

      if (summary) {
        const newUnits = new Decimal(summary).div(new Decimal(value)).toNumber();
        setValue('units', newUnits);
        trigger('units');
        return;
      }

      if (units) {
        const newSummary = new Decimal(value).mul(new Decimal(units)).toNumber();
        setValue('summary', newSummary);
        trigger('summary');
      }
    },
    [units, summary, setValue, trigger],
  );
}
