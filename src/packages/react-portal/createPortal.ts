import { createPortalController, createPortalElemenetsProvider } from './internal';
import { createInMemoryPortalStoreAdapter } from './stores';
import { Portal, PortalStoreAdapter } from './types';

export function createPortal(store?: PortalStoreAdapter): Portal {
  store = store ?? createInMemoryPortalStoreAdapter();

  const ElementsProvider = createPortalElemenetsProvider(store);
  const Controller = createPortalController(store);

  return {
    ElementsProvider,
    Controller,
  };
}
