import { useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';

import Decimal from 'decimal.js';

import { CreateBidModel } from '../schema';

export function useUnitsChange({ watch, setValue, trigger }: UseFormReturn<CreateBidModel, any, any>) {
  const [summary, price] = watch(['summary', 'price']);

  return useCallback(
    (value: number | string) => {
      if (!value) return;

      if (price) {
        const newSummary = new Decimal(value).mul(new Decimal(price)).toNumber();
        setValue('summary', newSummary);
        trigger('summary');
        return;
      }

      if (summary) {
        const newPrice = new Decimal(summary).div(new Decimal(value)).toNumber();
        setValue('price', newPrice);
        trigger('price');
        return;
      }
    },
    [summary, price, setValue, trigger],
  );
}
