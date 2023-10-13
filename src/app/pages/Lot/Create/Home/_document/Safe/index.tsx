import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { DocumentSafeBuy } from './Buy';
import { DocumentSafeSell } from './Sell';

export function DocumentSafe() {
  const { watch } = useFormContext();

  const direction = watch('direction');

  return useMemo(() => {
    switch (direction) {
      case 'BUY':
        return <DocumentSafeBuy />;
      case 'SELL':
        return <DocumentSafeSell />;
    }
  }, [direction]);
}
