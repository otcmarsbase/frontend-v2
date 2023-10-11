import { useContext } from 'react';

import { CreateLotContext } from '..';

export function useCreateLotContext() {
  const context = useContext(CreateLotContext);

  return context;
}
