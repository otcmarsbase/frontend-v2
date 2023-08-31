import { PropsWithChildren } from 'react';

import { StoresContext } from '../context';
import { rootStore } from '../rootStore';

export function StoreProvider({ children }: PropsWithChildren) {
  return <StoresContext.Provider value={rootStore}>{children}</StoresContext.Provider>;
}
