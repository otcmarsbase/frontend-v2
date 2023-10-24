import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import Decimal from 'decimal.js';

import { LotCreateModel } from '../../schema';

export function useCommonPriceChange() {
  const { watch, setValue, trigger } = useFormContext<LotCreateModel>();
  const [COMMON_UNITS, COMMON_SUMMARY] = watch(['COMMON_UNITS', 'COMMON_SUMMARY']);

  return useCallback(
    (value: number | string) => {
      if (!value) return;

      if (COMMON_SUMMARY) {
        const newUnits = new Decimal(COMMON_SUMMARY).div(new Decimal(value)).toString();
        setValue('COMMON_UNITS', newUnits);
        trigger('COMMON_UNITS');
        return;
      }

      if (COMMON_UNITS) {
        const newSummary = new Decimal(value).mul(new Decimal(COMMON_UNITS)).toString();
        setValue('COMMON_SUMMARY', newSummary);
        trigger('COMMON_SUMMARY');
      }
    },
    [COMMON_SUMMARY, COMMON_UNITS, setValue, trigger],
  );
}
