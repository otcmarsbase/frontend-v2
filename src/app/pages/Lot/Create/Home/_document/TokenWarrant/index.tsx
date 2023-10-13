import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { DocumentTokenWarrantBuy } from './Buy';
import { DocumentTokenWarrantSell } from './Sell';

export function DocumentTokenWarrant() {
  const { watch } = useFormContext();

  const direction = watch('direction');

  return useMemo(() => {
    switch (direction) {
      case 'BUY':
        return <DocumentTokenWarrantBuy />;
      case 'SELL':
        return <DocumentTokenWarrantSell />;
    }
  }, [direction]);
}
