import { useContext } from 'react';

import { LotWizardContext, LotWizardContextValue } from './LotWizardContext';

export function useLotWizard<T extends object = object>() {
  const context = useContext(LotWizardContext) as LotWizardContextValue<T>;

  return context;
}
