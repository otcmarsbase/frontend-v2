import { useContext } from 'react';
import { ROUTER_CONTEXT } from '../context';

export function useRouter() {
  return useContext(ROUTER_CONTEXT);
}
