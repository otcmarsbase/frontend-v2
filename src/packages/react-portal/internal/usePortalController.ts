import { useContext } from 'react';

import { PortalContext } from './PortalContext';

export function usePortalController() {
  const controller = useContext(PortalContext);
  if (!controller) throw new TypeError('PortalProvider is not provided.');

  return controller;
}
