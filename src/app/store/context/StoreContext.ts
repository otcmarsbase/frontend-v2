import { createContext } from 'react';

import { RootStore } from '../rootStore';

export const StoresContext = createContext<RootStore>(void 0);
