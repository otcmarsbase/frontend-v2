import { useContext } from 'react';

import { PortalContext } from '../context';

export function usePortalController() {
  const controller = useContext(PortalContext);
  if (!controller) throw new TypeError('PortalProvider is not provided.');

  return controller;
}
