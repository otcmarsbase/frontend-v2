import { PropsWithChildren, useMemo, useState } from 'react';

import { FormContext, LotWizardContext } from './LotWizardContext';

export function LotWizardProvider({ children }: PropsWithChildren) {
  const [formSchema, setFormSchema] = useState<FormContext['schema']>();
  const formContext = useMemo(() => ({ schema: formSchema }), [formSchema]);

  const contextValue = useMemo(() => ({ formContext, setFormSchema }), [formContext]);

  return <LotWizardContext.Provider value={contextValue}>{children}</LotWizardContext.Provider>;
}
