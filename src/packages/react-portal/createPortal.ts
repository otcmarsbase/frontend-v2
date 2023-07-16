import { createInMemoryPortalStoreAdapter } from './stores';
import { PortalStoreAdapter } from './types';
import { createPortalController, createPortalProvider } from './internal';

export function createPortal(store?: PortalStoreAdapter) {
  store = store ?? createInMemoryPortalStoreAdapter();

  const Root = createPortalProvider(store);
  const Controller = createPortalController(store);

  return {
    Root,
    Controller,
  };
}
