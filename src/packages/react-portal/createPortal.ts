import { createPortalController, createPortalProvider } from './internal';
import { createInMemoryPortalStoreAdapter } from './stores';
import { PortalStoreAdapter } from './types';

export function createPortal(store?: PortalStoreAdapter) {
  store = store ?? createInMemoryPortalStoreAdapter();

  const Provider = createPortalProvider(store);
  const Controller = createPortalController(store);

  return {
    Provider,
    Controller,
  };
}
