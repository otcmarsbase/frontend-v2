import { PropsWithChildren } from 'react';

import { StoresContext } from '../context';
import { RootStore } from '../rootStore';

export function StoreProvider({ children }: PropsWithChildren) {
  return <StoresContext.Provider value={RootStore.instance}>{children}</StoresContext.Provider>;
}
