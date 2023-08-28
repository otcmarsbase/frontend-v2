import { createContext } from 'react';

import { RPC } from '@schema/api-gateway';

export const RpcSchemaContext = createContext<RPC.Client>(null);
