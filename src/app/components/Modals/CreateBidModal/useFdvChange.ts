import { useCallback, useMemo } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { LotMultiplicatorDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import Decimal from 'decimal.js';

import { CreateBidModel } from './schema';
import { usePriceChange } from './usePriceChange';

export function useFdvChange(formMethods: UseFormReturn<CreateBidModel, any, any>, type: Resource.Lot.Enums.LotType) {
  const { setValue, trigger } = formMethods;

  const multiplicator = useMemo(() => LotMultiplicatorDictionary.get(type).multiplicator, [type]);

  const handlePriceChange = usePriceChange(formMethods, type);

  return useCallback(
    (value: number | string) => {
      if (!value) return;

      const newValue = new Decimal(value).div(100).div(multiplicator).toNumber();

      setValue('price', newValue);
      trigger('price');

      handlePriceChange(newValue);
    },
    [setValue, trigger, multiplicator, handlePriceChange],
  );
}
