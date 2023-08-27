import { useContext } from 'react';

import { StoresContext } from '../context';

export function useStore() {
  const context = useContext(StoresContext);
  if (!context) throw new TypeError('StoreProvider is not provide RootStore.');

  return context;
}
