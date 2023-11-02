import { createContext } from 'react';

import { RPC } from '@schema/desk-gateway';

export const RpcSchemaContext = createContext<RPC.Client>(null);
