import { useContext } from 'react';

import { LotWizardContext } from '..';

export function useLotWizard() {
  const context = useContext(LotWizardContext);

  return context;
}
