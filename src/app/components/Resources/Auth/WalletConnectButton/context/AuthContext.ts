import { createContext } from 'react';

import { IAuthContext } from '../interfaces';

export const AuthContext = createContext<IAuthContext>(void 0);
