import { useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';

import Decimal from 'decimal.js';

import { CreateBidModel } from '../schema';

export function useSummaryChange({ watch, setValue, trigger }: UseFormReturn<CreateBidModel, any, any>) {
  const [units, price] = watch(['units', 'price']);

  return useCallback(
    (value: number | string) => {
      if (!value) return;

      if (price) {
        const newUnits = new Decimal(value).div(new Decimal(price)).toNumber();
        setValue('units', newUnits);
        trigger('units');
        return;
      }

      if (units) {
        const newPrice = new Decimal(value).div(new Decimal(units)).toNumber();
        setValue('price', newPrice);
        trigger('price');
        return;
      }
    },
    [units, price, setValue, trigger],
  );
}
