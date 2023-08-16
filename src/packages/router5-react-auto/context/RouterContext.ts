import { createContext, useContext } from 'react';
import { Router } from 'router5';

const ROUTER_CONTEXT = createContext<Router>(null);

export const RouterContextProvider = ROUTER_CONTEXT.Provider;

export function useRouter() {
  return useContext(ROUTER_CONTEXT);
}
