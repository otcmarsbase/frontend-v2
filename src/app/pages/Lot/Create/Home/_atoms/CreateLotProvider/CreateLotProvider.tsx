import { PropsWithChildren, useMemo, useState } from 'react';

import { FormContext, CreateLotContext } from './CreateLotContext';

export function CreateLotProvider({ children }: PropsWithChildren) {
  const [formSchema, setFormSchema] = useState<FormContext['schema']>();
  const formContext = useMemo(() => ({ schema: formSchema }), [formSchema]);

  const contextValue = useMemo(() => ({ formContext, setFormSchema }), [formContext]);

  return <CreateLotContext.Provider value={contextValue}>{children}</CreateLotContext.Provider>;
}
