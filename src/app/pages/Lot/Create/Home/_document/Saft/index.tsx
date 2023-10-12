import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { DocumentSaftBuy } from './Buy';
import { DocumentSaftSell } from './Sell';

export function DocumentSaft() {
  const { watch } = useFormContext();

  const direction = watch('direction');

  return useMemo(() => {
    switch (direction) {
      case 'BUY':
        return <DocumentSaftBuy />;
      case 'SELL':
        return <DocumentSaftSell />;
    }
  }, [direction]);
}
