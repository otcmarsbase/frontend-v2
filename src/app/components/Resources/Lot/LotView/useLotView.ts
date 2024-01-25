import { useContext } from 'react';

import { LotViewContext } from './LotViewContext';

export function useLotView() {
  const context = useContext(LotViewContext);

  return context;
}
