import { PropsWithChildren } from 'react';

import { PortalContext } from '../context';
import { PortalController } from '../types';

export interface PortalProviderProps extends PropsWithChildren {
  ElementsProvider?: React.FC;
  controller: PortalController;
}

export function PortalProvider({ ElementsProvider, controller, children }: PortalProviderProps) {
  return (
    <PortalContext.Provider value={controller}>
      {ElementsProvider && <ElementsProvider />}
      {children}
    </PortalContext.Provider>
  );
}
