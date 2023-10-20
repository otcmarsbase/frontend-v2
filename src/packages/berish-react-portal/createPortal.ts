import { PortalController, createPortalRenderProvider } from './internal';
import { InMemoryPortalStore } from './stores';
import { Portal, PortalStore } from './types';

export function createPortal(store?: PortalStore): Portal {
  store = store ?? new InMemoryPortalStore();

  const RenderProvider = createPortalRenderProvider(store);
  const Controller = new PortalController(store);

  return {
    RenderProvider,
    Controller,
  };
}
